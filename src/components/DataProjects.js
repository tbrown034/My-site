import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import trevPhoto from "./Photos/trevorPhoto2.jpeg";
import Button from "@mui/material/Button";

export default function DataProjects() {
  return (
    <>
      <h2>Data Visualization Projects</h2>
      <h4>
        char In addition to the projects and web applications I built during my
        coding education, I enjoy exploring new technologies and finding new
        ways to grab, filter and display infomration.{" "}
      </h4>
      <div id="clipContainer">
        <Card id="card" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={<Avatar alt="Trevor" src={trevPhoto} />}
            title="Publication: Oklahoma Watch"
            subheader="June 3, 2022"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/fMDc4/6/"
            scrolling="yes"
            frameborder="1"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://datawrapper.dwcdn.net/fMDc4/6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2022/06/03/how-oklahoma-lawmakers-have-loosened-gun-regulations-the-past-decade%EF%BF%BC/"
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
            subheader="April 18, 2022"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/L0qvZ/4/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://datawrapper.dwcdn.net/L0qvZ/4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2022/06/03/how-oklahoma-lawmakers-have-loosened-gun-regulations-the-past-decade%EF%BF%BC/"
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
            subheader="April 18, 2022"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/NDN7G/9/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://www.datawrapper.de/_/NDN7G/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/"
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
            subheader="Feb. 28, 2022"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/m9I4h/2/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://www.datawrapper.de/_/m9I4h/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2022/02/28/claiming-out-of-state-influences-oklahoma-looks-to-clamp-down-on-state-question-laws/"
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
            subheader="Feb. 28, 2022"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/9FU1F/1/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://www.datawrapper.de/_/9FU1F/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/?utm_content=bufferff609&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer"
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
            subheader="Dec. 20, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/eTHLz/1/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://www.datawrapper.de/_/eTHLz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2022/01/24/oklahoma-legislative-financial-disclosures-tracking-potential-conflicts-of-interest/"
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
            subheader="Dec. 20, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/5Pout/1/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://www.datawrapper.de/_/5Pout/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2021/10/21/redistricting-proposals-that-could-overhaul-oklahoma-politics/"
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
            subheader="Dec. 20, 2021"
            className="cardBackground"
          />
          <CardMedia
            className="dataEmbed"
            component="iframe"
            src="https://datawrapper.dwcdn.net/EncDs/4/"
            scrolling="yes"
          />
          <CardContent className="cardBackground">
            <CardActions>
              <Button size="small">
                {" "}
                <a
                  href="https://www.datawrapper.de/_/EncDs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Visualization
                </a>
              </Button>
              <Button size="small">
                {" "}
                <a
                  href="https://oklahomawatch.org/2022/06/02/hundreds-of-bills-passed-the-legislature-just-a-dozen-were-authored-by-democrats/"
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
