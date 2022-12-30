import * as React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Clips from "./Clips";
import Experience from "./Timeline";
import Awards from "./Awards"

const Journalism = () => {
  return (
    <>
      <h1>Award-Winning Journalist</h1>
      
      
      
      <Experience />
        <h2 id="anchorClips">Clips</h2>
        <Clips />
        <h2 id="anchorAwards">Awards</h2>
        <Awards />

    </>
  );
};
export default Journalism;
