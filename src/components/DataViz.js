import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import DataTech from "./DataTech";
import DataProjects from "./DataProjects";

const DataViz = () => {
  return (
    <>
      <h1>Data Journalism and Graphics</h1>
      <div id="navDiv">
        <Navbar id="navbar" variant="dark">
          <Nav id="navLinks">
            <Nav.Link id="topHead" href="/journalism">
              Made with DataWrapper //
            </Nav.Link>
            <br />
            <Nav.Link id="topHead" href="/journalism">
              Made with Tableua //
            </Nav.Link>
            <Nav.Link id="topHead" href="/journalism">
              Made with Flourish
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      {/* <DataTech /> */}
      <DataProjects />
    </>
  );
};
export default DataViz;
