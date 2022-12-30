import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function Tech() {
  return (
    <>
      <h4>
       I specialize in a NERD stack (Node.js, Express, React, Databases using SQL), but I'm most home currently with React. I'm always learning more, but here are the main technologies I have used.
      </h4>
      <br></br>
      <div id="deviconContainer">
      <div id="devicon">
        <i class="devicon-html5-plain colored"></i>
        <i class="devicon-css3-plain colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-react-original colored"></i>
        <i class="devicon-express-original colored"></i>
        <i class="devicon-nodejs-plain colored"></i>
        </div>
        <div id="devicon">
          <i class="devicon-postgresql-plain colored"></i>
          <i class="devicon-bootstrap-plain colored"></i>
          <i class="devicon-materialui-plain colored"></i>
          <i class="devicon-vscode-plain colored"></i>
          <i class="devicon-github-original colored"></i>
        </div>
      </div>
      <br></br>
    </>
  );
}
