import React from "react";
import { Container, Row } from "react-bootstrap";

function Workflow() {
  return (
    <div className="content">
      <Container>
        <Row>
          <div className="page-title">Workflow</div>
          <hr className="home-hr" />
          <div className="page-subtitle">
            Templates for meta-repositories to promote fully reproducible
            workflows.
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

export default Workflow;
