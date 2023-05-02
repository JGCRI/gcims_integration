import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Models() {
  return (
    <div className="models">
      <div className="content">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="models-title">Avoid Stranded Scripts</div>
              <div className="models-subtitle">
                All code should be part of a software package or a GitHub
                repositry to ensure reproducibilty. <br></br>
                The templates below can be used as guides to build python and R packages.
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <a href="https://python.org">
                <div className="models-panel models-panel-left">
                  <span className="models-panel-text">
                    Python Package Template
                  </span>
                </div>
              </a>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <a href="https://r-project.org">
                <div className="models-panel models-panel-right">
                  <span className="models-panel-text">R Package Template</span>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Models;
