import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div id="navDiv">
    <Navbar id="navbar" variant="dark">
      <Navbar.Brand id="navBrand" href="#home">
        TB
      </Navbar.Brand>
      <Nav id="navLinks">
        <NavDropdown title="Journalism" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Experience</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Awards</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Top Clips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Skills and proficiencies
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Coding" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Goals</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Top Clips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Skills and proficiencies
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Data Vizsualizations" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Awards</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Top Clips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Skills and proficiencies
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Nav id="navContact">
      <Nav.Link eventKey={2} id="contact" href="#memes">
          About
        </Nav.Link>
      <Nav.Link eventKey={2} id="contact" href="#memes">
          Resume
        </Nav.Link>
        <Nav.Link eventKey={2} id="contact" href="#memes">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
    </div>
  );
}

export default Header;
