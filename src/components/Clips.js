import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import trevPhoto from "./Photos/trevorPhoto2.jpeg";
import onePhoto from "./Photos/LameyerBennett_24.webp";
import Button from '@mui/material/Button';


import Image from "react-bootstrap/Image";
import { color } from "@mui/system";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Clips() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <h4>Hello Clips</h4>
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Oklahoma Watch"
          subheader="June 6, 2022"
        />
        <CardMedia
          component="img"
          height="194"
          image={onePhoto}
          alt="Paella dish"
        />
        <CardContent>
          <Typography paragraph id="clipHeadline">
            The Misinformation Election: Lies, Conspiracy Theories Prominent in
            Many GOP Races
          </Typography>
          <Typography >
              PRYOR — Devon Garly spoke up about halfway through Jackson
              Lahmeyer’s speech.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              “What about the election fraud?” the 69-year-old Pryor resident
              asked. “How do we know you’d even be elected if we don’t know our
              votes are being counted?”
            </Typography>
            <Typography paragraph>
              Lahmeyer, a 30-year-old Tulsa pastor trying to unseat U.S. Sen.
              James Lankford in the June 28 GOP primary, paused for a moment and
              smiled.
            </Typography>
            <Typography paragraph>
              “Oh, you want to open up that can of worms,” he said, earning
              laughs from the 40 or so potential voters who came to see him
              campaign last month alongside former Oklahoma Republican Party
              Chairman John Bennett in rural Mayes County.
            </Typography>
            <Typography paragraph>
              Lahmeyer proceeded to go on a lengthy rant full of debunked lies,
              half-truths and conspiracy theories regarding the 2020 election.{" "}
            </Typography>
            <Typography paragraph>
              Lahmeyer is among the most vocal election deniers in the state. He
              is not alone in echoing and amplifying lies that have been
              disproven repeatedly — including in court.
            </Typography>
            <Typography paragraph>
              An Oklahoma Watch review of statements, social media posts and
              campaign literature from legislative and congressional revealed
              more than a dozen candidates who have repeated lies that
              widespread voter fraud cost Donald Trump the 2020 election.
            </Typography>
            <CardActions>
        <Button size="small">Read the Full Article</Button>
      </CardActions>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
