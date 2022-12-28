import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import trevPhoto from "./Photos/trevorPhoto2.jpeg";
import Button from "@mui/material/Button";
import ticTac from "./Photos/ticTac.png";
import retrograde from "./Photos/Retrograde.png";
import fitness from "./Photos/Fitness.png";
import personal from "./Photos/Personal.png";
import strangers from "./Photos/strangers.png";

{
  /* <iframe title="In Three Days, Oklahoma Sees Number of Mass Shooting Since 2009 Increase from Five to Seven " aria-label="Map" id="datawrapper-chart-fMDc4" src="https://datawrapper.dwcdn.net/fMDc4/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="503" data-external="1"></iframe> */
}

export default function DataProjects() {
  return (
    <>
      <h2>Projects</h2>
      <h4>
        In addition to the projects and web applications I built during my
        coding education, I enjoy exploring new technologies and finding new
        ways to grab, filter and display infomration.{" "}
      </h4>
      <div id="clipContainer">
        <Card id="card" sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Personal Project"
            subheader="Winter 2022"
            className="cardBackground"
          />
          <CardMedia className="dataEmbed"
          component="iframe"
          src="https://datawrapper.dwcdn.net/fMDc4/6/" 
          scrolling="no" frameborder="1" 
          
        />
          <CardContent className="cardBackground">
            <Typography paragraph>
              Created this very website that you are now on using a frontend
              tech stack that includes React, Bootstrap, Material UI.
            </Typography>
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://github.com/tbrown034/TicTacToeRedo.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the Code on Github
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
