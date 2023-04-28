import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkedAlt, FaSitemap } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import {BsFillHeartPulseFill, BsFillDatabaseFill } from "react-icons/bs";


function Home() {
  return (
    <div className="home">
      <div className="content">
        <Container fluid>
          <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="home-title">
                GCIMS<br></br>Integration
              </div>
              <div className="home-subtitle">
                Robust, Reproducible, Workflows
              </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={6} xl={6} className="d-none d-lg-block">
             <div className="circle-container">
                <div className="circle">
                  <div className="icon-container">
                    <AiFillCode />
                    <div className="icon-text">Models</div>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon-container">
                    <FaMapMarkedAlt />
                    <div className="icon-text">Map</div>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon-container">
                    <BsFillHeartPulseFill />
                    <div className="icon-text">Health</div>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon-container">
                    <FaSitemap />
                    <div className="icon-text">Workflows</div>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon-container">
                    <BsFillDatabaseFill />
                    <div className="icon-text">Data</div>
                  </div>
                </div>
                <div className="circle">
                  <div className="icon-container">
                    <IoBarChartSharp />
                    <div className="icon-text">Visual</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
