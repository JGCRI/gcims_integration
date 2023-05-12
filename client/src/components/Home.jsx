import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/PNNL_CENTER_FullColor.png";
import Panel from './Panel';
import { FaMapMarkedAlt, FaSitemap } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { BsFillHeartPulseFill, BsFillDatabaseFill } from "react-icons/bs";

function Home() {
  return (
      <div className="content home-page">
        <Container>
          <Row>
            <Col className="d-flex justify-content-between align-items-center">
              <div className="home-title">GCIMS Integration</div>
              <img className="home-logo" src={logo} alt="Logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <hr className="home-hr" />
              <div className="home-subtitle">
                GCIMS Integration promotes transparent, robust and reproducible
                workflows by maintaining, testing and validating the various
                tools and data used across the GCIMS ecosystem. The effort is
                divided into the following key focus areas.
              </div>
            </Col>
          </Row>
          <hr className="home-hr lower-hr" />
          <Row className="panel-container panels-top">
          <Panel
            className="panel"
            icon={<AiFillCode />}
            title="Packaged Models"
            overlay="Templates to build robust models with continuous integration"
            link="/#/models"
          />
          <Panel
            className="panel"
            icon={<FaMapMarkedAlt />}
            title="Software map"            
            overlay="Map of existing software and interconnections"
            link="/#/map"
          />
          <Panel
            className="panel"
            icon={<BsFillHeartPulseFill />}
            title="Software Health"            
            overlay="Continuous tracking of software builds, docs, and tests"
            link="/#/health"
          />
      </Row>
      <Row className="panel-container panels-bottom">
          <Panel
            className="panel"
            icon={<FaSitemap />}
            title="Reproducible Workflows"            
            overlay="Containerized, scalable, reproducible, architecture"
            link="/#/workflow"
          />
          <Panel
            className="panel"
            icon={<BsFillDatabaseFill />}
            title="Data Management"
            overlay="Curated data across project life-cycles"
            link="/#/data"
          />
          <Panel
            className="panel"
            icon={<IoBarChartSharp />}
            title="Persistent Insights"
            overlay="Tools for visualization & analytics"
            link="/#/visual"
          />
      </Row>
        </Container>
      </div>
  );
}

export default Home;
