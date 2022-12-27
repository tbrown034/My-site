import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import trevPhoto from "./Photos/trevorPhoto2.jpeg";
import Button from "@mui/material/Button";
import ticTac from "./Photos/ticTac.png";

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
        <Card id="card" sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="FullStack Academy"
            subheader="Summer 2022"
          />
          <CardMedia component="img" image={ticTac} alt="TicTac" />
          <CardContent>
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
      </div>
    </>
  );
}
