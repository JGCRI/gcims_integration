import React from "react";
import { Container, Row } from "react-bootstrap";
import Panel from './Panel';
import { FaDocker} from "react-icons/fa";
import { SiKubernetes} from "react-icons/si";
import { RiPagesFill} from "react-icons/ri";

function Workflow() {
  return (
    <div className="content">
      <Container>
        <Row>
          <div className="page-title">Workflow</div>
          <hr className="home-hr" />
          <div className="page-subtitle">
            Templates for meta-repositories and containerization to promote fully reproducible
            workflows.
          </div>
        </Row>
        <hr className="home-hr lower-hr" />
        <Row className="content-body">
          <div className="panel-container-models">
          <Panel
            className="panel panel-models"
            icon={<RiPagesFill />}
            title="Metarepo Template"            
            overlay="Basic metarepo template for reproducibe workflows"
            link="https://github.com/JGCRI/metarepo"
            target="_blank"
          />
        <Panel
            className="panel panel-models in-progress"
            icon={<FaDocker />}
            title="Docker Template"            
            overlay="Coming soon..."
            //link="https://github.com/JGCRI/pytemplate"
            //target="_blank"
          />
          <Panel
            className="panel panel-models in-progress"
            icon={<SiKubernetes />}
            title="Kuberenetes Template"
            overlay="Coming soon..."
            //link="/#/models"
          />
          </div>
          </Row>
      </Container>
    </div>
  );
}

export default Workflow;
