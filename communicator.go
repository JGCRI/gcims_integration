package main

import (
	"bufio"
	"bytes"
	"encoding/binary"
	"fmt"
	"math/rand"
	"net"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
)

// Changing CONNECTION_TYPE is not recommended

const (
	DEFAULT_HOST    = "0.0.0.0"
	DEFAULT_PORT    = "1919"
	CONNECTION_TYPE = "tcp"
)

var BUFFER_LEN = 5120

func main() {
	arguments := os.Args[1:]
	listen_port := DEFAULT_PORT
	if len(arguments) > 1 {
		listen_port = arguments[1]
	}
	if arguments[0] == "-s" {
		loop := 0
		server, err := net.Listen(CONNECTION_TYPE, DEFAULT_HOST+":"+listen_port)
		for err != nil && loop < 5 && len(arguments) <= 1 {
			listen_port = strconv.Itoa(rand.Intn(40000-2000) + 2000)
			server, err = net.Listen(CONNECTION_TYPE, DEFAULT_HOST+":"+listen_port)
			loop++
		}
		if err != nil {
			fmt.Println("Error listening: ", err.Error())
			os.Exit(1)
		}
		defer server.Close()
		fmt.Println("Listening on " + DEFAULT_HOST + ":" + listen_port)
		for {
			client, err := server.Accept()
			if err != nil {
				fmt.Println("Error accepting: ", err.Error())
				os.Exit(1)
			}
			handleRequest(client)
		}
	} else if arguments[0] == "-c" {
		client, err := net.Dial(CONNECTION_TYPE, DEFAULT_HOST+":"+listen_port)
		if err != nil {
			clientClose(err, client)
			gracefulExit()
		}
		defer client.Close()
		reader := bufio.NewReaderSize(os.Stdin, BUFFER_LEN)
		command, err := reader.ReadString('\n')
		if err != nil {
			clientClose(err, client)
			gracefulExit()
		}
		command = strings.Trim(command, "\n")
		commandLen := len(command)
		lenBuffer := make([]byte, 8)
		buffer := make([]byte, BUFFER_LEN)
		binary.BigEndian.PutUint64(lenBuffer, uint64(commandLen))
		_, err = client.Write(lenBuffer)
		if err != nil {
			clientClose(err, client)
			gracefulExit()
		}
		sent := 0
		for (sent * BUFFER_LEN) < commandLen {
			start := (sent * BUFFER_LEN)
			copy(buffer, command[start:])
			sendBuffer := bytes.Trim(buffer, "\x00")
			//fmt.Println("sending bufffer: ", sendBuffer)
			_, err = client.Write(sendBuffer)
			if err != nil {
				fmt.Println("Error sending data: ", err.Error())
				break
			}
			sent++
		}
		_, err = client.Read(lenBuffer)
		if err != nil {
			clientClose(err, client)
			gracefulExit()
		}
		outputLen := binary.BigEndian.Uint64(lenBuffer)
		read := 0
		for index, _ := range buffer {
			buffer[index] = 0
		}
		var output strings.Builder
		for (read * BUFFER_LEN) < int(outputLen) {
			_, err := client.Read(buffer)
			if err != nil {
				fmt.Println("Error reading output: ", err.Error())
				break
			}
			recievedBuffer := bytes.Trim(buffer, "\x00")
			output.Write(recievedBuffer)
			read++
		}
		fmt.Print(output.String())
	} else {
		fmt.Println("Invalid option")
		gracefulExit()
	}
}

func clientClose(err error, client net.Conn) {
	fmt.Println("Encountered an error: ")
	fmt.Println(err.Error())
	client.Close()
}

func gracefulExit() {
	fmt.Println("Exiting...")
	os.Exit(1)
}

func handleRequest(client net.Conn) {
	lenBuffer := make([]byte, 8)
	buffer := make([]byte, BUFFER_LEN)
	_, err := client.Read(lenBuffer)
	if err != nil {
		clientClose(err, client)
		return
	}
	commandLen := binary.BigEndian.Uint64(lenBuffer)
	flag := 0
	read := 0
	var output strings.Builder
	for (read * BUFFER_LEN) < int(commandLen) {
		_, err := client.Read(buffer)
		if err != nil {
			fmt.Println("Error reading:", err.Error())
			flag = 1
			break
		}
		recievedBuffer := bytes.Trim(buffer, "\x00")
		output.Write(recievedBuffer)
		read++
	}
	if flag == 1 {
		clientClose(err, client)
		return
	}
	outputStr := output.String()
	outputStr = outputStr[:commandLen]
	fmt.Println("Running Command: ", outputStr)
	allCommands := strings.Split(outputStr, "|")
	match := regexp.MustCompile(`[^\s"']+|"([^"]*)"|'([^']*)'`)
	var errOut strings.Builder
	var out strings.Builder
	var lastOutput strings.Builder
	for _, element := range allCommands {
		element = strings.Trim(element, " ")
		arguments := match.FindAllString(element, -1)
		for i, argument := range arguments {
			arguments[i] = strings.Trim(argument, "'\"")
		}
		if len(arguments) > 0 {
			command := exec.Command(string(arguments[0]), arguments[1:]...)
			input, err := command.StdinPipe()
			if err != nil {
				fmt.Println(err.Error())
				input.Close()
				break
			}
			defer input.Close()
			command.Stdout = &out
			command.Stderr = &errOut
			command.Stdin = strings.NewReader(lastOutput.String())
			err = command.Run()
			if err != nil {
				binary.BigEndian.PutUint64(lenBuffer, uint64(len(errOut.String())))
				client.Write(lenBuffer)
				client.Write([]byte(errOut.String()))
				break
			}
		}
		lastOutput.Reset()
		_, err = lastOutput.WriteString(out.String())
		if err != nil {
			fmt.Println("Error reading command output: ", err.Error())
			break
		}
		out.Reset()
		errOut.Reset()
	}
	if err == nil {
		binary.BigEndian.PutUint64(lenBuffer, uint64(len(lastOutput.String())))
		client.Write(lenBuffer)
		client.Write([]byte(lastOutput.String()))
	}
	client.Close()
}
