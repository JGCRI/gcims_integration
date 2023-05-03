import React from "react";
import { Table, Container, Row } from "react-bootstrap";

function Health() {
  return (
    <div className="content">
      <Container>
        <Row>
          <div className="page-title">Software Health</div>
          <hr className="home-hr" />
          <div className="page-subtitle">
            Tracking all software packages and their continuous integration (CI)
            badges.
          </div>
        </Row>
        <hr className="home-hr" />
        <Row className="body-health">
          <Table bordered hover className="text-center">
            <thead className="bg-black text-white">
              <tr>
                <th> Software </th>
                <th> Purpose </th>
                <th> Build </th>
                <th> Tests </th>
                <th> Coverage </th>
                <th> Documentation </th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/osiris">osiris</a> </td>
                <td> Impacts ag yield </td>
                <td> <img alt="build" src="https://github.com/JGCRI/osiris/actions/workflows/build.yml/badge.svg"></img> </td>
                <td> <img alt="test_coverage" src="https://github.com/JGCRI/osiris/actions/workflows/test_coverage.yml/badge.svg"></img> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/osiris"><img src="https://codecov.io/gh/JGCRI/osiris/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <img alt="docs" src="https://github.com/JGCRI/osiris/actions/workflows/docs.yaml/badge.svg"></img> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/helios">helios</a> </td>
                <td> Impacts heating//cooling </td>
                <td> <img alt="build" src="https://github.com/JGCRI/helios/actions/workflows/build.yml/badge.svg"></img> </td>
                <td> <img alt="test_coverage" src="https://github.com/JGCRI/helios/actions/workflows/test_coverage.yml/badge.svg"></img> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/helios"><img src="https://codecov.io/gh/JGCRI/helios/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <img alt="docs" src="https://github.com/JGCRI/helios/actions/workflows/docs.yaml/badge.svg?branch=main"></img> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/xanthos">xanthos</a> </td>
                <td> Impacts runoff </td>
                <td> <img alt="build" src="https://github.com/JGCRI/xanthos/actions/workflows/build.yml/badge.svg"></img> </td>
                <td> <img alt="test_coverage" src="https://github.com/JGCRI/xanthos/actions/workflows/test_coverage.yml/badge.svg"></img> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/xanthos"><img src="https://codecov.io/gh/JGCRI/xanthos/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <img alt="docs" src="https://github.com/JGCRI/xanthos/actions/workflows/docs.yaml/badge.svg?branch=main"></img> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/superwell">superwell</a> </td>
                <td> Groundwater availability & costs </td>
                <td> <img alt="build" src="https://github.com/JGCRI/superwell/actions/workflows/build.yml/badge.svg"></img> </td>
                <td> <img alt="test_coverage" src="https://github.com/JGCRI/superwell/actions/workflows/test_coverage.yml/badge.svg"></img> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/superwell"><img src="https://codecov.io/gh/JGCRI/superwell/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <img alt="docs" src="https://github.com/JGCRI/superwell/actions/workflows/docs.yaml/badge.svg?branch=main"></img> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/ambrosia">ambrosia</a> </td>
                <td> Food demand </td>
                <td> <img alt="build" src="https://github.com/JGCRI/ambrosia/actions/workflows/build.yml/badge.svg"></img> </td>
                <td> <img alt="test_coverage" src="https://github.com/JGCRI/ambrosia/actions/workflows/test_coverage.yml/badge.svg"></img> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/ambrosia"><img src="https://codecov.io/gh/JGCRI/ambrosia/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <img alt="docs" src="https://github.com/JGCRI/ambrosia/actions/workflows/docs.yaml/badge.svg?branch=main"></img> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pridr">pridr</a> </td>
                <td> Income distribution </td>
                <td> <img alt="build" src="https://github.com/JGCRI/pridr/actions/workflows/build.yml/badge.svg"></img> </td>
                <td> <img alt="test_coverage" src="https://github.com/JGCRI/pridr/actions/workflows/test_coverage.yml/badge.svg"></img> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/pridr"><img src="https://codecov.io/gh/JGCRI/pridr/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <img alt="docs" src="https://github.com/JGCRI/pridr/actions/workflows/docs.yaml/badge.svg?branch=main"></img> </td>
            </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Health;
