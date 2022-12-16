import React from "react";
import trevPhoto from "./Photos/trevorphoto3.jpeg";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <>
      <h1>A Little About Myslef</h1>
      <div id="aboutContainter">
        <div id="aboutWords">
          <h3>
            Hello! My name is Trevor, and I'm passionate about journalism,
            telling important stories and web development.
          </h3>
          <br></br>
          <h3>
            I've been a reporter for nearly two decades, most recently working
            as an investigative journalist for Oklahoma Watch.
          </h3>
          <br></br>
          <h3></h3>
          <h3>
            I grew up in the suburbs of Chicago but now live in Oklahoma City
            where I like to hike, explore new restaurants and breweries with
            with my girlfriend, Lauren, and my dog, Indy.
          </h3>
        </div>
        <div id="aboutPic">
        <Image src={trevPhoto} fluid id="secondPic" alt="Trevor again"></Image>
        </div>
      </div>
    </>
  );
};
export default About;
