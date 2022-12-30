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
            <Nav.Link id="topHead" href="/journalism">
              Skills //
            </Nav.Link>
            <br />
            <Nav.Link id="topHead" href="/journalism">
              Projects //
            </Nav.Link>
            <Nav.Link id="topHead" href="/journalism">
             Intersts
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
       
        <Tech />
    


       
        <WebProjects/>
    
    
        </>
    )
}
export default WebDevelopment;
