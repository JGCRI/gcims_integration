import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Panel from './Panel';
import { FaPython, FaRProject } from "react-icons/fa";

function Models() {
  return (
    <div className="content">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="page-title">Packaged Models</div>
              <hr className="home-hr" />
              <div className="page-subtitle">
                All code should be part of a software package or a GitHub
                repositry to ensure reproducibilty. <br></br>
                The templates below can be used as guides to build python and R packages.
              </div>
            </Col>
          </Row>
          <hr className="home-hr" />
          <Row className="panel-container-models">
        <Panel
            className="panel panel-models"
            icon={<FaPython />}
            title="Pytemplate"            
            overlay="Python package template with continuous integration"
            link="https://github.com/JGCRI/pytemplate"
            target="_blank"
          />
          <Panel
            className="panel panel-models"
            icon={<FaRProject />}
            title="Rtemplate"
            overlay="Coming soon..."
            link="#"
          />
          </Row>
        </Container>
      </div>
  );
}

export default Models;
