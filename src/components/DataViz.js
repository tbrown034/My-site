import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DataProjectsDw from "./DataProjectsDw";
import DataProjectsTl from "./DataProjectsTl";

const DataViz = () => {
  return (
    <>
      <h1>Data Visualizer</h1>
      <div id="navDiv">
        <Navbar id="navbar" variant="dark">
          <Nav id="navLinks">
            <Nav.Link id="topHeadcomp" href="#anchorDw">
              Made with DataWrapper //
            </Nav.Link>
            <Nav.Link id="topHeadcomp" href="#anchorTl">
              Made with Tableau
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <h2 id="anchorDw">Made with DataWrapper</h2>
      <DataProjectsDw id="anchorExperience"/>
      <div id="line">
      </div>
      <h2 id="anchorTl">Made with Tableau</h2>
      <DataProjectsTl id="anchorExperience"/>
    </>
  );
};
export default DataViz;
