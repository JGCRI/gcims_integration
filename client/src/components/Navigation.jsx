import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/PNNL_CENTER_White.png";
import { FaMapMarkedAlt, FaSitemap } from "react-icons/fa";
import { AiFillGithub, AiFillHome, AiFillCode } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { BsFillHeartPulseFill, BsFillDatabaseFill, BsFillInfoCircleFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { MdHelp } from "react-icons/md";


function Navigation() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bartop">
      <Container fluid>
        <Navbar.Brand href="/gcims_integration"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto nav-left">
          <NavLink className="nav-link" to="/">
              <div className="nav-icon"><AiFillHome /></div>
              </NavLink>
            <NavLink className="nav-link" to="/models">
              <div className="nav-icon"><AiFillCode /></div> Models
              </NavLink>
              <NavLink className="nav-link" to="/map">
              <div className="nav-icon"><FaMapMarkedAlt /></div>Map
            </NavLink>
            <NavLink className="nav-link" to="/health">
              <div className="nav-icon"><BsFillHeartPulseFill /></div>Health
            </NavLink>
            <NavLink className="nav-link" to="/workflow">
              <div className="nav-icon"><FaSitemap /></div>Workflow
            </NavLink>
            <NavLink className="nav-link" to="/data">
              <div className="nav-icon"><BsFillDatabaseFill /></div>Data
            </NavLink>
            <NavLink className="nav-link" to="/visual">
              <div className="nav-icon"><IoBarChartSharp /></div>Visual
            </NavLink>
            </Nav>
            <Nav className="ms-auto nav-right">
              <NavLink className="nav-link" to="/about">
                <div className="nav-icon"><BsFillInfoCircleFill /></div>About
              </NavLink>
              <NavLink className="nav-link" to="/team">
                <div className="nav-icon"><RiTeamFill /></div>Team
              </NavLink>
              <NavLink className="nav-link" to="/help">
                <div className="nav-icon"><MdHelp /></div>Help
              </NavLink>
              <a className="nav-link" href="https://github.com/JGCRI/gcims_integration" target="_blank" rel="noreferrer">
                <div className="nav-icon"><AiFillGithub /></div>
              </a>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;