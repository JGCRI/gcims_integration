import React from "react";
import { Container, Row } from "react-bootstrap";

function Data() {
  return (
    <div className="content">
      <Container>
        <Row>
          <div className="page-title">Data Management</div>
          <hr className="home-hr" />
          <div className="page-subtitle">
            Data storage and persistent identifiers to promote Findable
            Accessible Interoperable and Reusable (FAIR) practices.
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

export default Data;
