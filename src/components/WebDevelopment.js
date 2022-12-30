import WebProjects from "./WebProjects";
import Tech from "./Tech"
import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const WebDevelopment = () => {
    return (
        <>
        <h1>Full-Stack Web Engineer</h1>
        <div id="navDiv">
        <Navbar id="navbar" variant="dark">
          <Nav id="navLinks">
            <Nav.Link id="topHead" href="#anchorStack">
              Skills //
            </Nav.Link>
            <br />
            <Nav.Link id="topHead" href="#anchorProjects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <h2 id="anchorStack">Tech Stack</h2>
        <Tech />
        <h2 id="anchorProjects">Projects</h2>
        <WebProjects/>
    
    
        </>
    )
}
export default WebDevelopment;
