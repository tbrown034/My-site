import React from "react";
import trevPhoto from "./Photos/Trevor12.JPG";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <div id="topHome">
          <div id="introContainer">
            <h1>Hello 👋, I'm Trevor</h1>
            <br />
            <h3><Link id="plainLink" to="/journalism">Journalist</Link> + <Link id="plainLink" to="/webdevelopment">Coder</Link> + <Link id="plainLink" to="/dataviz">Data Viz Expert</Link></h3>
            <div class="iconContainer">
            <Link id="plainLink" to="/journalism"><span class="material-symbols-outlined material-icons md-48">
                edit
              </span></Link>
              <Link id="plainLink" to="/webdevelopment"><span class="material-symbols-outlined material-icons md-48">
                code
              </span></Link>
              <Link id="plainLink" to="/dataviz"><span class="material-symbols-outlined material-icons md-48">
                dataset
              </span></Link>
              
              
              
              
              
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
            I'm an <Link id="styleLink" to="/journalism">award-winning investigative journalist</Link> with nearly two decades of experience. I also specialize in <Link id="styleLink" to="/dataviz">gathering, analyzing and visualizing data</Link>. 

            Most recently, I have become a <Link id="styleLink" to="/dataviz">full-stack web developer</Link> with an interest in journalism, tech and everthing in between. Let's <Link id="styleLink" to="/contact">create something cool</Link>.
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
