import React from "react";
import Image from "react-bootstrap/Image";
import myResume from "./Photos/resumeTbWithPic.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Resume() {
 

  return (
    <>
      <h1>My Resume</h1>
      <div id="homeButtons">
        <a href="TrevorResume.pdf"
        download="TrevorResume.pdf"
        >
        <button id="downloadResume">Download Resume</button>
        </a>
      </div>
      <div id="resumeContain">
        <Image src={myResume} fluid alt="resume"></Image>
      </div>
      <div id="homeButtons">
        <DropdownButton id="dropdown-basic-button" title="View My Work">
      <Dropdown.Item href="/journalism">Journalism</Dropdown.Item>
      <Dropdown.Item href="webdevelopment">Coding</Dropdown.Item>
      <Dropdown.Item href="dataviz">Data Vizsualizations</Dropdown.Item>
    </DropdownButton>
    <a href="resumeTb.pdf"
        download="resumeTb.pdf"
        >
        <button id="downloadResume">Download Resume</button>
        </a>
    <DropdownButton id="dropdown-basic-button" title="Let's Talk">
      <Dropdown.Item href="/about">About Me</Dropdown.Item>
      <Dropdown.Item href="/resume">Resume</Dropdown.Item>
      <Dropdown.Item href="/contact"> Contact</Dropdown.Item>
    </DropdownButton>
   
        
        </div>
      
    </>
  );
}
