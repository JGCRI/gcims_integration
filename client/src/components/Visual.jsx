import React from "react";
import { Container, Row } from "react-bootstrap";

function Visual() {
  return (
    <div className="content">
      <Container>
        <Row>
          <div className="page-title">Visualization</div>
          <hr className="home-hr" />
          <div className="page-subtitle">
            Tools for visualization and analytics to provide persistent insights
            at single points of access.
          </div>
        </Row>
        <hr className="home-hr lower-hr" />
        <Row className="content-body">
          <div className="page-title">In Progress..</div>
        </Row>
      </Container>
    </div>
  );
}

export default Visual;
