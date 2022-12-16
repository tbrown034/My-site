import React from "react";
import trevPhoto from "./Photos/trevorphoto3.jpeg";
import Image from "react-bootstrap/Image";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <>
      <h1>A Little About Me</h1>
      <Container>
      <Row>
        <Col sm={8}>
            <div id="aboutWords">
          <h4>
            Hello! My name is Trevor, and I'm passionate about journalism,
            telling important stories and web development.
          </h4>
          <br></br>
          <h4>
            I've been a reporter for nearly two decades, most recently working
            as an investigative journalist for Oklahoma Watch.
          </h4>
          <br></br>
          <h4>
            After graduating from the University of Oklahoma's Outreach Coding Bootcamp, powered by FullStack Academy, I am now certified full-stack developer specializing in a tech stack that includes, JavaScript, React, Express and Node.js.  
          </h4>
          <br></br>
          <h4>
            I grew up in the suburbs of Chicago but now live in Oklahoma City
            where I like to hike, explore new restaurants and breweries with
            with my girlfriend, Lauren, and my dog, Indy.
          </h4>
        </div></Col>
        <Col sm={3}>
        <div id="aboutPic">
        <Image src={trevPhoto} fluid id="secondPic" alt="Trevor again"></Image>
        </div>
        </Col>
      </Row>
    </Container>

      <br></br>
      <div id="homeButtons">
        <DropdownButton id="dropdown-basic-button" title="View My Work">
      <Dropdown.Item href="/journalism">Journalism</Dropdown.Item>
      <Dropdown.Item href="webdevelopment">Coding</Dropdown.Item>
      <Dropdown.Item href="dataviz">Data Vizsualizations</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Let's Talk">
      <Dropdown.Item href="/about">About Me</Dropdown.Item>
      <Dropdown.Item href="/resume">Resume</Dropdown.Item>
      <Dropdown.Item href="/contact"> Contact</Dropdown.Item>
    </DropdownButton>
   
        
        </div>
    </>
  );
};
export default About;
