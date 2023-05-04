import React from "react";
import { Container, Row } from "react-bootstrap";
import gcims_integration from '../assets/img/gcims_integration.jpg';


function Map() {
  return (
    <div className="content">
        <Container>
          <Row>
              <div className="page-title">Software Map</div>
              <hr className="home-hr" />
              <div className="page-subtitle">
                A map of all JGCRI software packages and how they are interconnected.
              </div>
          </Row>
          <hr className="home-hr lower-hr" />
          <Row className="content-body">
            <div className="body-map">
          <a href={gcims_integration} target="_blank" rel="noreferrer">
            <img src={gcims_integration} alt="gcims_integration.jpg" className="mx-auto" />
          </a>
          </div>
          </Row>
        </Container>
      </div>
  );
}

export default Map;
