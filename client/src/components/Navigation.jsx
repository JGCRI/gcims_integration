import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/PNNL_CENTER_White.png";
import { useState } from "react";
import { FaMapMarkedAlt, FaSitemap } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { BsFillHeartPulseFill, BsFillDatabaseFill, BsFillInfoCircleFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { MdHelp } from "react-icons/md";


function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      w-100
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
      className="bartop"
    >
      <Container fluid>
        <Navbar.Brand to="/">
          <a href="/">
            <img className="logo" src={logo} alt="Logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ width: "100%" }}>
            <NavLink
              onClick={() => setExpanded(false)}
              className="nav-link"
              to="/models"
            >
              <div className="nav-icon">
                <AiFillCode />
              </div>{" "}
              Models
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className="nav-link"
              to="/map"
            >
              <div className="nav-icon">
                <FaMapMarkedAlt />
              </div>{" "}
              Map
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className="nav-link"
              to="/health"
            >
              <div className="nav-icon">
                <BsFillHeartPulseFill />
              </div>{" "}
              Health
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className="nav-link"
              to="/workflow"
            >
              <div className="nav-icon">
                <FaSitemap />
              </div>{" "}
              Workflow
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className="nav-link"
              to="/Data"
            >
              <div className="nav-icon">
                <BsFillDatabaseFill />
              </div>{" "}
              Data
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className="nav-link"
              to="/Visual"
            >
              <div className="nav-icon">
                <IoBarChartSharp />
              </div>{" "}
              Visual
            </NavLink>
            <div className={`ms-auto d-flex flex-column flex-lg-row ${expanded ? "justify-content-between" : "justify-content-start"}`}>
              <NavLink
                onClick={() => setExpanded(false)}
                className="nav-link nav-link-right"
                to="/about"
              >
                <div className="nav-icon">
                  <BsFillInfoCircleFill />
                </div>{" "}
                About
              </NavLink>
              <NavLink
                onClick={() => setExpanded(false)}
                className="nav-link nav-link-right"
                to="/about"
              >
                <div className="nav-icon">
                  <RiTeamFill />
                </div>{" "}
                Team
              </NavLink>
              <NavLink
                onClick={() => setExpanded(false)}
                className="nav-link nav-link-right nav-link-right-margin"
                to="/about"
              >
                <div className="nav-icon">
                  <MdHelp />
                </div>{" "}
                Help
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;