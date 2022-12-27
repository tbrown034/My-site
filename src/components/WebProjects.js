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
import retrograde from "./Photos/Retrograde.png"
import fitness from "./Photos/Fitness.png"
import personal from "./Photos/Personal.png"
import strangers from "./Photos/strangers.png"




export default function WebProjects() {
  return (
    <>
      <h2>Projects</h2>
      <h4>
        In addition to the projects and web applications I built during my
        coding education, I enjoy exploring new technologies and finding new
        ways to grab, filter and display infomration.{" "}
      </h4>
      <div id="clipContainer">
      <Card  id="card" sx={{ maxWidth: 500 }}> 
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
           
            title="Personal Project"
            subheader="Winter 2022"
            className="cardBackground"

          />
          <CardMedia component="img" image={personal} alt="personal" />
          <CardContent className="cardBackground"  >
            <Typography paragraph>
              Created this very website that you are now on using a frontend tech stack that includes React, Bootstrap, Material UI.
            </Typography>
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="willowy-dragon-a2e1a7.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </Button>
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
        <Card id="card" sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
           
            title="FullStack Academy"
            subheader="Fall 2022"
            className="cardBackground"
          />
          <CardMedia component="img" image={retrograde} alt="retrograde" />
          <CardContent className="cardBackground">
            <Typography paragraph>
            Worked on a team of four to create an e-commerce site with a tech stack that included React, Express, PostgreSQL and Axios.
            </Typography>
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="retrograde-pc-games.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://github.com/Pied-Piper-2208/retrograde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the Code on Github
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://www.youtube.com/watch?v=BlpOtWfLxtw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch a short video presentation
                </a>
              </Button>
            </CardActions>
          </CardContent>
          
        </Card>
        <Card id="card" sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            className="cardBackground"
            title="FullStack Academy"
            subheader="Fall 2022"
          />
          <CardMedia component="img" image={fitness} alt="fitness" />
          <CardContent className="cardBackground">
            <Typography paragraph>
              Worked on a team of two to create a full-stack application that allows users to sign in, register, create excersies and share routines with others. Web stack included React, Node.JS, Express and REST API. 
            </Typography>
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://bespoke-shortbread-6a27e3.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </Button>
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
        
        <Card id="card" sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            className="cardBackground"
           
            title="FullStack Academy"
            subheader="Summer 2022"
          />
          <CardMedia component="img" image={ticTac} alt="TicTac" />
          <CardContent className="cardBackground">
            <Typography paragraph>
              Created a simple tic-tac-toe game only vanilla JavaScript
            </Typography>
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="willowy-dragon-a2e1a7.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </Button>
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
        <Card id="card" sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            className="cardBackground"
           
            title="FullStack Academy"
            subheader="Summer 2022"
          />
          <CardMedia component="img" image={strangers} alt="stranger's things" />
          <CardContent className="cardBackground">
            <Typography paragraph>
              Created a light Craigslist-typle clone that allows users to register, sign in, post items for sale and view items from others using React. 
            </Typography>
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://merry-kheer-5148bb.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://github.com/tbrown034/Strangers-Things-Trevor.git
                  "
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
