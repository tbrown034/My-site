import React from "react";
import trevPhoto from "./Photos/Trevor12.JPG";
import Image from "react-bootstrap/Image";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <div id="topHome">
          
          <div id="introContainer">
            <h1>Hello, I'm Trevor.</h1>
            <h3>Journalist + Coder</h3>
            <div class="iconContainer">
              <span class="material-symbols-outlined material-icons md-48">
                edit
              </span>
              <span class="material-symbols-outlined material-icons md-48">
                add
              </span>
              <span class="material-symbols-outlined material-icons md-48">
                code
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
        <h3>
          I'm an <b>award-winning investigative journalist</b> with nearly two
          decades of experience. <br/> <br/>  I'm also a freshly minted{" "}
          <b>full-stack web developer</b> who is interested in building new
          tools at the intersection of technology and journalism. <u></u>Let's{" "}
          <b>create something cool.</b>
        </h3>
        <div id="homeButtons">
        <DropdownButton id="dropdown-basic-button" title="View My Work">
      <Dropdown.Item href="#/action-1">Journalism</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Coding</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Data Vizsualizations</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Let's Talk">
      <Dropdown.Item href="#/action-1">About Me</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Resume</Dropdown.Item>
      <Dropdown.Item href="#/action-3"> Contact</Dropdown.Item>
    </DropdownButton>
   
        
        </div>
       


        </div>
      </div>
    </>
  );
};

export default Home;

// <div id="homeCards">
// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={articles}  />
// <Card.Body>
// <Card.Title>Journalism</Card.Title>
// <Card.Text>
//   Some quick example text to build on the card title and make up the
//   bulk of the card's content.
// </Card.Text>
// <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>
// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={data} />
// <Card.Body>
// <Card.Title>Card Title</Card.Title>
// <Card.Text>
//   Some quick example text to build on the card title and make up the
//   bulk of the card's content.
// </Card.Text>
// <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>
// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={codingProject} />
// <Card.Body>
// <Card.Title>Card Title</Card.Title>
// <Card.Text>
//   Some quick example text to build on the card title and make up the
//   bulk of the card's content.
// </Card.Text>
// <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>


  
// </div>
