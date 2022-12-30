import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Clips from "./Clips";
import Experience from "./Timeline";
import Awards from "./Awards";

const Journalism = () => {
  return (
    <>
      <h1>Award-Winning Journalist</h1>
      <div id="navDiv">
        <Navbar id="navbar" variant="dark">
          <Nav id="navLinks">
            <Nav.Link id="topHead" href="/journalism">
              Experience //
            </Nav.Link>
            <br />
            <Nav.Link id="topHead" href="/journalism">
              Coding //
            </Nav.Link>
            <Nav.Link id="topHead" href="/journalism">
              Data Visualizations
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <Experience />
      <h2 id="anchorClips">Clips</h2>
      <Clips />
      <h2 id="anchorAwards">Awards</h2>
      <Awards />
    </>
  );
};
export default Journalism;
