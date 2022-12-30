import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div id="navDiv">
      <Navbar id="navbar" variant="dark">
        <Navbar.Brand id="navBrand" href="/">
          TB
        </Navbar.Brand>
        <Nav id="navLinks">
          <Nav.Link id="topHead" href="/journalism">
            <span class="material-symbols-outlined material-icons">edit</span>{" "}
            Journalism //
          </Nav.Link>
          <br />
          <Nav.Link id="topHead" href="/webdevelopment">
            <span class="material-symbols-outlined material-icons.md-49">
              code
            </span>{" "}
            Coding //
          </Nav.Link>
          <Nav.Link id="topHead" href="/dataviz">
            <span class="material-symbols-outlined material-icons.md-49">
              dataset
            </span>{" "}
            Data Visualizations
          </Nav.Link>
        </Nav>
        <Nav id="navContact">
          <Nav.Link eventKey={2} id="contact" href="/about">
            About
          </Nav.Link>
          <Nav.Link eventKey={2} id="contact" href="/resume">
            Resume
          </Nav.Link>
          <Nav.Link eventKey={2} id="contact" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
