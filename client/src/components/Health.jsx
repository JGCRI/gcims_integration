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
        <hr className="home-hr lower-hr" />
        <Row className="content-body">
          <Table bordered hover className="text-center">
            <thead className="bg-black text-white">
              <tr>
                <th> Software </th>
                <th class="table-wider"> Purpose </th>
                <th> Build </th>
                <th> Tests </th>
                <th> Coverage </th>
                <th> Documentation </th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/osirheliosrchartis">osiris</a> </td>
                <td> Impacts ag yield </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/osiris/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/osiris/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/osiris/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/osiris/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/osiris"><img src="https://codecov.io/gh/JGCRI/osiris/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/osiris/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/osiris/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/helios">helios</a> </td>
                <td> Impacts heating/cooling </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/helios/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/helios/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/helios/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/helios/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/helios"><img src="https://codecov.io/gh/JGCRI/helios/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/helios/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/helios/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/xanthos">xanthos</a> </td>
                <td> Impacts runoff </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/xanthos/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/xanthos/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/xanthos/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/xanthos/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/xanthos"><img src="https://codecov.io/gh/JGCRI/xanthos/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/xanthos/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/xanthos/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/superwell">superwell</a> </td>
                <td> Groundwater availability & costs </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/superwell/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/superwell/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/superwell/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/superwell/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/superwell"><img src="https://codecov.io/gh/JGCRI/superwell/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/superwell/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/superwell/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/ambrosia">ambrosia</a> </td>
                <td> Food demand </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/ambrosia/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/ambrosia/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/ambrosia/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/ambrosia/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/ambrosia"><img src="https://codecov.io/gh/JGCRI/ambrosia/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/ambrosia/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/ambrosia/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pridr">pridr</a> </td>
                <td> Income distribution </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pridr/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/pridr/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pridr/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/pridr/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/pridr"><img src="https://codecov.io/gh/JGCRI/pridr/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pridr/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/pridr/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/moirai">moirai</a> </td>
                <td> Land system </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/moirai/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/moirai/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/moirai/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/moirai/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/moirai"><img src="https://codecov.io/gh/JGCRI/moirai/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/moirai/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/moirai/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamdata">gcamdata</a> </td>
                <td> GCAM data </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamdata/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/gcamdata/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamdata/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/gcamdata/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/gcamdata"><img src="https://codecov.io/gh/JGCRI/gcamdata/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamdata/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/gcamdata/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcam">gcam</a> </td>
                <td> GCAM </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcam/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/gcam/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcam/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/gcam/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/gcam"><img src="https://codecov.io/gh/JGCRI/gcam/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcam/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/gcam/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcambreakout">gcambreakout</a> </td>
                <td> Breakout regions </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcambreakout/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/gcambreakout/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcambreakout/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/gcambreakout/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/gcambreakout"><img src="https://codecov.io/gh/JGCRI/gcambreakout/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcambreakout/actions/workflows/pkgdown.yaml"><img alt="docs" src="https://github.com/JGCRI/gcambreakout/actions/workflows/pkgdown.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamextractor">gcamextractor</a> </td>
                <td> GCAM data extraction </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamextractor/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/gcamextractor/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamextractor/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/gcamextractor/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/gcamextractor"><img src="https://codecov.io/gh/JGCRI/gcamextractor/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/gcamextractor/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/gcamextractor/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/tethys">tethys</a> </td>
                <td> Downscaling water use </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/tethys/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/tethys/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/tethys/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/tethys/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/tethys"><img src="https://codecov.io/gh/JGCRI/tethys/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/tethys/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/tethys/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/demeter">demeter</a> </td>
                <td> Downscaling landuse </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/demeter/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/demeter/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/demeter/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/demeter/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/demeter"><img src="https://codecov.io/gh/JGCRI/demeter/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/demeter/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/demeter/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/stitches">stitches</a> </td>
                <td> Downscaling climate data</td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/stitches/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/stitches/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/stitches/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/stitches/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/stitches"><img src="https://codecov.io/gh/JGCRI/stitches/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/stitches/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/stitches/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hector">hector</a> </td>
                <td> Concentrations, temp, carbon cycle </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hector/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/hector/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hector/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/hector/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/hector"><img src="https://codecov.io/gh/JGCRI/hector/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hector/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/hector/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/plutus">plutus</a> </td>
                <td> Electricity investments </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/plutus/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/plutus/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/plutus/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/plutus/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/plutus"><img src="https://codecov.io/gh/JGCRI/plutus/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/plutus/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/plutus/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rmap">rmap</a> </td>
                <td> Visualization maps </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rmap/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/rmap/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rmap/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/rmap/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/rmap"><img src="https://codecov.io/gh/JGCRI/rmap/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rmap/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/rmap/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rchart">rchart</a> </td>
                <td> Visualization charts</td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rchart/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/rchart/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rchart/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/rchart/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/rchart"><img src="https://codecov.io/gh/JGCRI/rchart/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rchart/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/rchart/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/jgcricolors">jgcricolors</a> </td>
                <td> visualization color palettes </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/jgcricolors/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/jgcricolors/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/jgcricolors/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/jgcricolors/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/jgcricolors"><img src="https://codecov.io/gh/JGCRI/jgcricolors/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/jgcricolors/actions/workflows/pkgdown.yaml"><img alt="docs" src="https://github.com/JGCRI/jgcricolors/actions/workflows/pkgdown.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hectorui">hectorui</a> </td>
                <td> Visualization hector </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hectorui/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/hectorui/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hectorui/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/hectorui/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/hectorui"><img src="https://codecov.io/gh/JGCRI/hectorui/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/hectorui/actions/workflows/pkgdown.yml"><img alt="docs" src="https://github.com/JGCRI/hectorui/actions/workflows/pkgdown.yml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/argus">argus</a> </td>
                <td> Visualization GCAM </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/argus/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/argus/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/argus/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/argus/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/argus"><img src="https://codecov.io/gh/JGCRI/argus/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/argus/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/argus/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rpackageutils">rpackageutils</a> </td>
                <td> Utilities for R packages</td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rpackageutils/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/rpackageutils/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rpackageutils/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/rpackageutils/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/rpackageutils"><img src="https://codecov.io/gh/JGCRI/rpackageutils/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rpackageutils/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/rpackageutils/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pypackageutils">pypackageutils</a> </td>
                <td> Utilities for python packages </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pypackageutils/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/pypackageutils/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pypackageutils/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/pypackageutils/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/pypackageutils"><img src="https://codecov.io/gh/JGCRI/pypackageutils/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pypackageutils/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/pypackageutils/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pytemplate">pytemplate</a> </td>
                <td> Python package template </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pytemplate/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/pytemplate/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pytemplate/actions/workflows/test.yml"><img alt="test_coverage" src="https://github.com/JGCRI/pytemplate/actions/workflows/test.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/pytemplate"><img src="https://codecov.io/gh/JGCRI/pytemplate/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/pytemplate/actions/workflows/docs.yml"><img alt="docs" src="https://github.com/JGCRI/pytemplate/actions/workflows/docs.yml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rtemplate">rtemplate</a> </td>
                <td> R package template </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rtemplate/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/rtemplate/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rtemplate/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/rtemplate/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/rtemplate"><img src="https://codecov.io/gh/JGCRI/rtemplate/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rtemplate/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/rtemplate/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/scarce">scarce</a> </td>
                <td> Resource scarcity </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/scarce/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/scarce/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/scarce/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/scarce/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/scarce"><img src="https://codecov.io/gh/JGCRI/scarce/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/scarce/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/scarce/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rhap">rhap</a> </td>
                <td> Indoor air pollution </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rhap/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/rhap/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rhap/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/rhap/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/rhap"><img src="https://codecov.io/gh/JGCRI/rhap/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rhap/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/rhap/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/society">society</a> </td>
                <td> Jobs, equity </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/society/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/society/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/society/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/society/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/society"><img src="https://codecov.io/gh/JGCRI/society/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/society/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/society/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            <tr>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rheat">rheat</a> </td>
                <td> Deaths by extreme heat </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rheat/actions/workflows/build.yml"><img alt="build" src="https://github.com/JGCRI/rheat/actions/workflows/build.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rheat/actions/workflows/test_coverage.yml"><img alt="test_coverage" src="https://github.com/JGCRI/rheat/actions/workflows/test_coverage.yml/badge.svg"></img></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://codecov.io/gh/JGCRI/rheat"><img src="https://codecov.io/gh/JGCRI/rheat/branch/main/graph/badge.svg?token=XQ913U4IYM" alt="codecov"/></a> </td>
                <td> <a target="_blank" rel="noreferrer" href="https://github.com/JGCRI/rheat/actions/workflows/docs.yaml"><img alt="docs" src="https://github.com/JGCRI/rheat/actions/workflows/docs.yaml/badge.svg"></img></a> </td>
            </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Health;
