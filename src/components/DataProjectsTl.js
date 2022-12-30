import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import trevPhoto from "./Photos/trevorPhoto2.jpeg";
import Button from "@mui/material/Button";

export default function DataProjectsTl() {
  return (
    <>
      <div id="clipContainer">
        
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            subheader="Nov. 19, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="img"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Du&#47;DualMaps_16366620253140&#47;Dashboard1&#47;1_rss.png"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/DualMaps_16366620253140/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2021/11/19/redistricting-weighing-the-impact-of-splitting-oklahomas-largest-hispanic-community/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Related Article
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            s
            subheader="Oct. 4, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="img"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Te&#47;TestScores2021v_2019&#47;Dashboard1&#47;1_rss.png"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/TestScores2021v_2019/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2021/10/04/student-learning-in-a-pandemic-test-results-show-heavy-toll/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Related Article
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            s
            subheader="Oct. 4, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="img"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Va&#47;VaccinationTweets&#47;Dashboard1&#47;1_rss.png"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/TestScores2021v_2019/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2021/10/04/student-learning-in-a-pandemic-test-results-show-heavy-toll/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Related Article
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            s
            subheader="Oct. 4, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="img"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2020Legislature1&#47;Dashboard1&#47;1_rss.png"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/2020Legislature1/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2021/02/08/oklahoma-lawmakers-report-large-campaign-reserves-after-2020-races/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Related Article
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            s
            subheader="March. 26, 2020"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="img"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Nu&#47;Nursing_Home_Infection_Violations&#47;Dashboard1&#47;1_rss.png"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/Nursing_Home_Infection_Violations/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2020/03/26/nursing-home-violations-and-now-deaths-highlight-covid-19-dangers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Related Article
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            s
            subheader="March. 26, 2020"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="img"
            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;BothMapsRedistricting&#47;Dashboard1&#47;1_rss.png"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/Nursing_Home_Infection_Violations/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://public.tableau.com/views/BothMapsRedistricting/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Related Article
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
