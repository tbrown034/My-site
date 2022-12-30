import React from "react";
import trevPhoto from "./Photos/Trevor12.JPG";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <div id="topHome">
          <div id="introContainer">
            <h1>Hello, I'm Trevor.</h1>
            <br />
            <h3>Journalist + Coder + Data Viz Expert</h3>
            <div class="iconContainer">
              <span class="material-symbols-outlined material-icons md-48">
                edit
              </span>
              <span class="material-symbols-outlined material-icons md-48">
                code
              </span>
              <span class="material-symbols-outlined material-icons md-48">
                dataset
              </span>
            </div>
            <div id="homePhotoContainer">
              <Image
                src={trevPhoto}
                fluid
                roundedCircle
                id="homeTrevorPhoto"
                alt="Trevor"
              ></Image>
            </div>
          </div>
        </div>
        <div id="homeText">
          <br />
          <h3>
            I'm an <b>award-winning investigative journalist</b> with nearly two
            decades of experience. <br /> <br /> I'm also a freshly minted{" "}
            <b>full-stack web developer</b> who is interested in building new
            tools at the intersection of technology and journalism. <u></u>Let's{" "}
            <b>create something cool.</b>
          </h3>
          <br />
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
        </div>
      </div>
    </>
  );
};
export default Home;
