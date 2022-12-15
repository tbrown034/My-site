import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div id="navDiv">
    <Navbar id="navbar" variant="dark">
      <Navbar.Brand id="navBrand" href="/">
        TB
      </Navbar.Brand>
      <Nav id="navLinks">
        <NavDropdown title="Journalism" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/journalism">Experience</NavDropdown.Item>
          <NavDropdown.Item href="/journalism">Awards</NavDropdown.Item>
          <NavDropdown.Item href="/journalism">Top Clips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/journalism">
            Skills and proficiencies
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Web Development" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/webdevelopment">Projects</NavDropdown.Item>
          <NavDropdown.Item href="/webdevelopment">Goals</NavDropdown.Item>
          <NavDropdown.Item href="/webdevelopment">Top Clips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="webdevelopment">
            Skills and proficiencies
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Data Vizsualizations" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/dataviz">Projects</NavDropdown.Item>
          <NavDropdown.Item href="/dataviz">Awards</NavDropdown.Item>
          <NavDropdown.Item href="/dataviz">Top Clips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/dataviz">
            Skills and proficiencies
          </NavDropdown.Item>
        </NavDropdown>
        
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
