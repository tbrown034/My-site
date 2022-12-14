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
import trevPhoto from "./Photos/trevorPhoto2.jpeg";
import onePhoto from "./Photos/LameyerBennett_24.webp";
import trooperPhoto from "./Photos/trooper.jpeg";
import Button from "@mui/material/Button";
import siloPhoto from "./Photos/silo.jpeg";
import Jan6Photo from "./Photos/Jan6.webp";
import churchPhoto from "./Photos/church.webp";
import docPhoto from "./Photos/doc.webp";
import stittPhoto from "./Photos/stitt.webp";
import medicaidPhoto from "./Photos/Medicaid.webp";
import noComment from "./Photos/noComment.webp";
import covid from "./Photos/covid.webp";
import profiling from "./Photos/profiling.webp";
import hospital from "./Photos/hospital.webp";
import crabtree from "./Photos/crabtree.webp";








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
      <div id="clipContainer">
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"
          
          title="Publication: Oklahoma Watch"
          subheader="June 6, 2022"
        />
        <CardMedia
          component="img"
          height="194"
          image={onePhoto}
          alt="Paella dish"
        />
        <CardContent className="cardBackground">
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Misinformation Election: Lies, Conspiracy Theories Prominent in
            Many GOP Races
                </a>
          </Typography>
          <Typography paragraph>
            PRYOR ??? Devon Garly spoke up about halfway through Jackson
            Lahmeyer???s speech.
          </Typography>
          <Typography paragraph>
              ???What about the election fraud???? the 69-year-old Pryor resident
              asked. ???How do we know you???d even be elected if we don???t know our
              votes are being counted????
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
          <CardContent className="cardBackground">
            
            <Typography paragraph>
              Lahmeyer, a 30-year-old Tulsa pastor trying to unseat U.S. Sen.
              James Lankford in the June 28 GOP primary, paused for a moment and
              smiled.
            </Typography>
            <Typography paragraph>
              ???Oh, you want to open up that can of worms,??? he said, earning
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
              disproven repeatedly ??? including in court.
            </Typography>
            <Typography paragraph>
              An Oklahoma Watch review of statements, social media posts and
              campaign literature from legislative and congressional revealed
              more than a dozen candidates who have repeated lies that
              widespread voter fraud cost Donald Trump the 2020 election.
            </Typography>
            <CardActions>
              <Button size="small"> <a
                  href="https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"
          
          title="Publication: Oklahoma Watch"
          subheader="June 2, 2022"
        />
        <CardMedia
          component="img"
          height="194"
          image={profiling}
          alt="Paella dish"
        />
        <CardContent className="cardBackground">
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2020/06/02/twenty-years-after-it-became-a-crime-racial-profiling-charges-remain-scarce/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twenty Years After It Became a Crime, Racial Profiling Charges Remain Scarce

                </a>
          </Typography>
          <Typography paragraph>
          As protests over racial policing practices continue to rage across Oklahoma and the nation, a milestone in Oklahoma???s racial history will quietly pass later this week.


          </Typography>
          <Typography paragraph>
          Friday will mark the 20th anniversary of the passage of a state law that for the first time explicitly banned racial profiling by law enforcement agencies.


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
          <CardContent className="cardBackground">
            
            <Typography paragraph>
            Shortly after the bill was signed into law in June 2000, Maxine Horner, a state senator at the time who authored the legislation, called it ???long overdue??? and said she hoped ???law enforcement officers who routinely utilize racial profiling in their work will think twice before making unfounded assumptions.???


            </Typography>
            <Typography paragraph>
            But there???s little evidence that the law has brought any teeth to the ban against racial profiling.  


            </Typography>
            <Typography paragraph>
            A 2018 Oklahoma Watch investigation found that every complaint submitted to the state attorney general???s office or the now-shuttered Oklahoma Human Rights Commission over the past decade was dismissed. The reason often given is lack of proof.  
            </Typography>
            <Typography paragraph>
            Two years later, as nationwide protests over racial unrest and police brutality have put policing practices back in a spotlight, the picture hasn???t changed.


            </Typography>
            <Typography paragraph>
            State documents show that 2018 and 2019 produced some of the highest number of complaints the state has seen since the law was approved. Last year a record 21 complaints were submitted, alleging instances of profiling by 19 state or local law enforcement agencies.


            </Typography>
            <CardActions>
              <Button size="small"> <a
                  href="hhttps://oklahomawatch.org/2020/06/02/twenty-years-after-it-became-a-crime-racial-profiling-charges-remain-scarce/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>

      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"
          
          title="Publication: Oklahoma Watch"
          subheader="Aug. 7, 2019"
        />
        <CardMedia
          component="img"
          height="194"
          image={hospital}
          alt="Paella dish"
        />
        <CardContent className="cardBackground">
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands-each-year-over-unpaid-medical-bills/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oklahoma Hospitals Sue Thousands Each Year Over Unpaid Medical Bills

                </a>
          </Typography>
          <Typography paragraph>
          It was not a call that ???Rabekah Crow expected.


          </Typography>
          <Typography paragraph>
          The Bartlesville resident was working ???at her job as a Phillips 66 help-desk agent??? in spring 2018 when an unfamiliar number ???flashed across her??? caller ID.


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
          <CardContent className="cardBackground">
            
            <Typography paragraph>
            ???The ???person ???just??? said they??? were outside of my work and were delivering papers for me to sign,??? she said. ???So I thought, ???No big deal.??????


            </Typography>
            <Typography paragraph>
            When she came out, she was served with a lawsuit demanding payment of nearly $3,500 in medical bills from the birth of her youngest son in 2015.</Typography>


            <Typography paragraph>
            The bill was from St. John Health System???s??? Jane Phillips Medical Center and Hospital. Crow thought it had been paid because she had filed paperwork asking for Medicaid to cover the delivery. But the hospital disagreed.


            </Typography>
            <Typography paragraph>
            Nearly three months later, a Washington County district judge issued a default judgment ???in favor of the hospital. Crow failed to challenge the lawsuit in time, saying later she couldn???t afford a lawyer and was unfamiliar with the legal system.


            </Typography>
            <Typography paragraph>
            The judge later ordered Phillips 66 to withhold as much as $470 from Crow???s twice-a-month paycheck until her debt ??? which had grown to $4,230 with interest and attorney fees ??? was paid. For more than four months Crow saw her take-home payment reduced by a quarter.


            </Typography>
            <CardActions>
              <Button size="small"> <a
                  href="https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands-each-year-over-unpaid-medical-bills/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>


     
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

         
          title="Publication: Oklahoma Watch"
          subheader="Dec. 20, 2021"
        />
        <CardMedia component="img" height="194" image={churchPhoto} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  As Some Oklahoma Churches Push Vaccines, Others Sow Misinformation,
            Doubt
                </a>
            
          </Typography>
          <Typography paragraph>
            EDMOND ??? Paul Blair says he doesn???t have a stance on whether his
            congregation should receive a COVID-19 vaccine.
          </Typography>
          <Typography paragraph>
              The 58-year-old cancer survivor is convinced he doesn???t need the
              shot. And he tells members of Fairview Baptist Church that it???s up
              to them to decide if they need it.
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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
              The 58-year-old cancer survivor is convinced he doesn???t need the
              shot. And he tells members of Fairview Baptist Church that it???s up
              to them to decide if they need it.
            </Typography>
            <Typography paragraph>
              But when Blair, a former Oklahoma State and Chicago Bears
              offensive lineman and two-time unsuccessful Republican legislative
              candidate, stands in the pulpit on Sunday mornings, he leans into
              what he really thinks about the virus that has killed about 14,000
              Oklahomans and 750,000 Americans.
            </Typography>
            <Typography paragraph>
              On several occasions, Blair has said Dr. Anthony Fauci, the
              nation???s top infectious-disease expert, should be jailed or end up
              in hell.
            </Typography>
            <Typography paragraph>
              He has raised unfounded and disproven conspiracy theories,
              including one that the virus was man made and Bill Gates and other
              billionaires are using the virus as a population-control device.
            </Typography>
           
            
            <CardActions>
              <Button size="small"><a
                  href="https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>

      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

          
          title="Publication: Oklahoma Watch"
          subheader="March 15, 2021"
        />
        <CardMedia component="img" height="194" image={noComment} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2021/03/15/no-comment-in-oklahomas-legislature-public-rarely-given-chance-to-weigh-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                > No Comment: In Oklahoma???s Legislature, Public Rarely Given Chance to Weigh In
                           </a>
         
                  


       




          </Typography>
          <Typography paragraph>
          It took one minute and 55 seconds for an Oklahoma House legislative committee to give the green light to a bill that would make it easier for teachers to carry guns in classrooms.




          </Typography>
          <Typography>
          For a bill that would give legal protections for drivers who flee a protest, lawmakers spent just over six minutes before advancing it out of committee. 






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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
            Another hot-button issue ??? deciding whether the Legislature should have powers to review and potentially challenge federal laws and regulations ??? was forwarded to the House floor after two and half minutes.


            </Typography>
            <Typography paragraph>
            Although times vary, quick committee hearings and votes are not unusual at the State Capitol, where legislative committees decide which bills die and which reach the next step in the legislative process.


            </Typography>
            <Typography paragraph>
            Unlike several other states, Oklahoma does not require ??? and rarely offers ??? the public a chance to comment before bills reach a final vote. Committee chairs may invite people to testify. In most cases, that doesn???t happen. 
            </Typography>
           
            <CardActions>
            <Button size="small"> <a
                  href="https://oklahomawatch.org/2021/03/15/no-comment-in-oklahomas-legislature-public-rarely-given-chance-to-weigh-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
    
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

          
          title="Publication: Oklahoma Watch"
          subheader="Dec. 4, 2020"
        />
        <CardMedia component="img" height="194" image={crabtree} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2020/12/04/stitts-new-board-of-education-pick-spread-misinformation-conspiracy-theories/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oklahoma Watch Investigation: Gov. Stitt???s New Board of Education Pick Spread Misinformation, Conspiracy Theories

                </a>
          </Typography>
          <Typography paragraph>
          Gov. Kevin Stitt???s new state board pick spent months sharing debunked COVID-19 medical advice, conspiracy theories and anti-vaccine content before hiding the posts from public view shortly after news of her new position became public Friday. </Typography>
          <Typography paragraph>
            Information reviewed by Oklahoma Watch also shows that Crabtree frequently took to Facebook to share other controversial opinions, unsubstantiated medical advice.
           




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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
            Crabtree is a vocal anti-mask advocate who earlier this year founded a group called Enid Freedom Fighters, which had helped for months to block a mask mandate in the city and is now leading an effort to recall elected officials who supported the move. Enid???s mask mandate passed Tuesday on a third attempt, according to an Enid News story.

            


            </Typography>
            <Typography paragraph>
            Stitt???s pick was condemned Friday by Democrats in the Legislature who criticized Crabtree???s views on masks and her lack of public education experience.
            </Typography>
            
            <Typography paragraph>
            Her social media posts were either deleted or hidden from public view just before noon Friday, but Oklahoma Watch was able to review and capture screenshots of several postings before that occurred. 
            <br/>
            <br/>
            (Co-byline with Jennifer Palmer)
            </Typography>
           

            <CardActions>
              <Button size="small"><a
                  href="https://oklahomawatch.org/2020/12/04/stitts-new-board-of-education-pick-spread-misinformation-conspiracy-theories/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More 
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>

      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

          
          title="Publication: Oklahoma Watch"
          subheader="July 30, 2021"
        />
        <CardMedia component="img" height="194" image={stittPhoto} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2021/07/30/as-other-governors-pull-out-vaccine-media-blitz-oklahomas-stitt-largely-silent/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  As Other Governors Pull Out Vaccine Media Blitz, Oklahoma???s Stitt Largely Silent

                </a>
          </Typography>
          <Typography>
            Just over four months ago, with the TV cameras running, Gov. Kevin
            Stitt sat down to get his single dose of the Johnson and Johnson
            vaccine from a state health department nurse.
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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
              The move earned the governor kudos from the state???s medical
              community and Democrats ??? two groups that have long been critical
              of Stitt???s COVID-19 response ??? as they hoped a popular red-state
              governor could help convince those on the fence to get a COVID-19
              vaccine.
            </Typography>
            <Typography paragraph>
              Since then, it has been near radio silence from the governor on
              social media and elsewhere when it comes to vaccines.
            </Typography>
            <Typography paragraph>
              An Oklahoma Watch review of Stitt???s Twitter account since he got
              the vaccine shot shows that the governor???s posts about vaccination
              outreach or the state???s vaccination successes accounted for only
              1.53% of his tweets (3 out of 193), including his tweet about
              getting the vaccine.
            </Typography>
            <Typography paragraph>
              That stands in stark contrast to the more proactive approach being
              taken by governors ??? both Republicans and Democrats??? of Oklahoma???s
              neighbors.
            </Typography>
            <Typography paragraph>
              Oklahoma Watch also reviewed the social posting of the Twitter
              accounts of the governors of the six surrounding states: Colorado,
              Kansas, Missouri, Arkansas, Texas and New Mexico. The review of
              posts since March 28 found:
            </Typography>

            <CardActions>
              <Button size="small"><a
                  href="https://oklahomawatch.org/2021/07/30/as-other-governors-pull-out-vaccine-media-blitz-oklahomas-stitt-largely-silent/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

          
          title="Publication: Oklahoma Watch"
          subheader="July 2, 2021"
        />
        <CardMedia
          component="img"
          height="194"
          image={medicaidPhoto}
        />
        <CardContent           className="cardBackground"
>
<Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2021/07/02/hundreds-of-thousands-of-oklahomans-can-now-get-free-health-care-do-they-know-that/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hundreds of Thousands of Oklahomans Can Now Get Free Health Care. Do They Know That?


                </a>
          </Typography>
          <Typography paragraph>
          Dr. Daniel Joyce has been giving out a different type of news to patients at Lawton???s Hearts That Care Clinic.


          </Typography>
          <Typography paragraph>
            Joyce, who runs the non-profit free clinic, has been talking to them to see if they???ll be eligible for free health coverage under the state???s Medicaid expansion that took effect Thursday.


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
          <CardContent           className="cardBackground"
>
          
            <Typography paragraph>
            Time after time, he???s found many have been shocked ??? albeit pleasantly so.


            </Typography>
            <Typography paragraph>
            ???I have one patient who???s been without insurance for about 10 years,??? he said. ???We got them the information (about Medicaid expansion) and they came back in tears saying ???I got approved, is this for real???????


            </Typography>
            <Typography paragraph>
            Nearly a year after voters approved State Question 802, health care leaders and patient advocates celebrated Thursday as Medicaid expansion took effect and Oklahoma officially became the 37th state to accept the optional expansion.  


            </Typography>
            <Typography paragraph>
            But the state faces another challenge: How do you make sure hundreds of thousands of newly eligible Oklahomans know about their new potentially life-changing benefits?



            </Typography>
            <CardActions>
            <Button size="small"> <a
                  href="https://oklahomawatch.org/2021/07/02/hundreds-of-thousands-of-oklahomans-can-now-get-free-health-care-do-they-know-that/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>

      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

         
          title="Publication: Oklahoma Watch"
          subheader="April 16, 2021"
        />
        <CardMedia component="img" height="194" image={covid} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://www.pbs.org/wgbh/frontline/article/experts-oklahoma-among-the-unhealthiest-states-faces-heightened-risks-for-covid-19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experts: Oklahoma, Among the Unhealthiest States, Faces Heightened Risks for COVID-19 (PBS FrontLine Collaboration)
                  


                </a>
          





          </Typography>
          <Typography paragraph>
          It wasn???t the number of patients that worried Dr. Mark Doescher the most as he made his rounds through the University of Oklahoma Medical Center in Oklahoma City last week.





          </Typography>
          <Typography>
          The hospital was emptier than usual. Scores of non-emergency surgeries and treatments had been suspended while health-care workers prepared for Oklahoma???s expected peak in COVID-19 hospitalizations later this month.








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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
            What concerned Doescher, who practices family medicine, was the types of patients he was seeing. They tended to be older and had ???some major things going on,??? he said. Those included cancer, heart or lung disease, obesity and other underlying conditions that, according to the Centers for Disease Control and Prevention, can heighten the risks of developing a severe illness or dying from COVID-19.
            </Typography>
            <Typography paragraph>
            ???I am concerned that as we head toward the peak of COVID-19 that we will see some bumps in ICU and ventilator use, and even higher mortality, compared to other states just because our risk profile is so significant for Oklahoma,??? said Doescher, who is also director of community outreach for the Stephenson Cancer Center, located in the same medical complex.
            </Typography>
            <Typography paragraph>
            With 2,357 cases and 131 deaths as of Thursday, Oklahoma hasn???t been hit as hard by the coronavirus as some other states, such as New York, New Jersey and Michigan. Even its per-capita deaths are lower, though it ranks in the top 20.


            </Typography>
            <Typography paragraph>
            But health experts caution that COVID-19???s impact on the state could be especially severe because of its well-documented and notorious status as one of the unhealthiest states in the country.
            </Typography>
            

            <CardActions>
            <Button size="small"> <a
                  href="https://www.pbs.org/wgbh/frontline/article/experts-oklahoma-among-the-unhealthiest-states-faces-heightened-risks-for-covid-19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

         
          title="Publication: Oklahoma Watch"
          subheader="Jan. 13, 2022"
        />
        <CardMedia component="img" height="194" image={Jan6Photo} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A Year After Jan. 6 Insurrection, Election Lies, Misinformation
            Persist For Some in Oklahoma GOP
                </a>
            
          </Typography>
          <Typography>
            Hours before a pro-Trump mob stormed the U.S. Capitol on Jan. 6,
            2021 in a stunning and brazen display that left five dead and
            widespread destruction, hundreds of Oklahomans gathered outside of
            the State Capitol in a protest seeking to overturn the presidential
            election.
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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
              Holding signs or flags that read, ???stop the steal,??? ???fight for
              freedom??? and ???Patriots! Duty Calls,??? the crowd listened as a
              series of speakers, including elected officials, pushed the
              so-called ???Big Lie??? that the presidential election was somehow
              rigged and that former President Donald Trump should remain in
              office.
            </Typography>
            <Typography paragraph>
              A year later, the United States is still dealing with the fallout
              of the insurrection and the disinformation campaign that pushed
              the country to the brink of catastrophe.
            </Typography>
            <Typography paragraph>
              While a majority of Americans rightfully believe that President
              Joe Biden legitimately won the election, a recent national poll
              found 75% of Republicans say there was widespread fraud that cost
              Trump the election. Meanwhile, a new Washington Post-University of
              Maryland survey found 1 in 3 Americans say violence against the
              government can be justified.
            </Typography>
            <Typography paragraph>
              Over the past year, Trump???s numerous electoral legal challenges
              were all rejected. And election officials, both Republican and
              Democrats, across the country have repeatedly affirmed there is no
              evidence of widespread fraud.
            </Typography>
            <Typography paragraph>
              But in Oklahoma, a contingent of Republican party leaders, state
              lawmakers and 2022 candidates continue to push debunked conspiracy
              theories that experts worry will continue to sow distrust of fair
              and secure elections.
            </Typography>

            <CardActions>
              <Button size="small"><a
                  href="https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More   
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

    
          title="Publication: Oklahoma Watch"
          subheader="Aug. 27, 2021"
        />
        <CardMedia component="img" height="194" image={docPhoto} />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://oklahomawatch.org/2021/08/27/oklahoma-doctors-tired-but-not-deterred-push-to-get-patients-vaccinated/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oklahoma Doctors, Tired But Not Deterred, Push to Get Patients
            Vaccinated
                </a>
            
          </Typography>
          <Typography paragraph>
            Dr. Douglas Drevets recalls feeling a burst of optimism when the
            year began.
          </Typography>
          <Typography paragraph>
              The state???s long and deadly battle against COVID-19 seemed to have
              turned a corner as Oklahoma emerged as one of the top states in
              vaccinating eligible populations.
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
          <CardContent           className="cardBackground"
>
            
            <Typography paragraph>But that wouldn???t last long.</Typography>
            <Typography paragraph>
              Oklahoma, once in the top 10 states for getting residents
              vaccinated, is now 12th worst in the country with more than 57% of
              the state still unvaccinated.
            </Typography>
            <Typography paragraph>
              ???I think we are all tired and we feel extremely disappointed that
              we had an opportunity and lost it,??? said Drevets, who is chief of
              infectious diseases at OU Health. ???It was like watching a football
              game where we came out strong, got a couple scores up and then
              fell asleep and blew it.???
            </Typography>
            <Typography paragraph>
              The consequences of the state???s relatively low vaccination rate is
              now playing out in crowded hospitals where once again overworked
              and overstressed emergency room staff tend to scores of
              Oklahomans, many on ventilators, fighting for their lives.
            </Typography>
            <Typography paragraph>
              At the same time, doctors are waging their own war against
              misinformation as they try to convince vaccine-hesitant patients
              to get the shot. In interviews with 10 medical professionals
              across the state, ranging from fertility specialists to general
              practitioners, doctors say bad or deliberately false information
              about COVID-19 and the vaccine still runs rampant.
            </Typography>
            <CardActions>
              <Button size="small"> <a
                  href="https://oklahomawatch.org/2021/08/27/oklahoma-doctors-tired-but-not-deterred-push-to-get-patients-vaccinated/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>

     
      



      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

        
          title="Wyoming Tribune Eagle"
          subheader="Dec. 13, 2015"
        />
        <CardMedia
          component="img"
          height="194"
          image={siloPhoto}
          alt="Paella dish"
        />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
                  href="https://www.em.sej.org/headlines/questions-remain-around-cleanup-former-nuke-sites-near-cheyenne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                             Safety Questions Remain Around Former Nuke Site


                </a>
          </Typography>
          <Typography paragraph>
            CHEYENNE ??? Leo Garcia hadn't heard of trichloroethylene about four
            decades ago when he moved into his red-and-white house just west of
            Cheyenne.
          </Typography>
          <Typography paragraph>
              He didn't know the colorless chemical, also known as TCE, has been
              linked to liver cancer and several other health problems.
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
              He didn't know the colorless chemical, also known as TCE, has been
              linked to liver cancer and several other health problems.
            </Typography>
            <Typography paragraph>
              And he didn't know that he would end up living near the edge of a
              slow-moving contaminated groundwater plume that is troubling him
              and many others in Laramie County.
            </Typography>
            <Typography paragraph>
              "There is definitely concern that they don't know where the
              pollution exactly is," he said. "We know it's getting near the
              city, and so living here on the outskirts, I think we have some
              legitimate concerns."
            </Typography>
            <Typography paragraph>
              About 12 miles to the west of Garcia's house, tucked away in the
              Belvoir Ranch, is the former Atlas Missile Site 4. That is where
              the Army Corps of Engineers plans to spend tens of millions of
              dollars on a more-than-100-year effort to remove TCE from the
              groundwater after it seeped into the ground while being used to
              clean the missile launcher in the 1960s.
            </Typography>
            <CardActions>
            <Button size="small"> <a
                  href="https://www.em.sej.org/headlines/questions-remain-around-cleanup-former-nuke-sites-near-cheyenne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>

      
      <Card id="card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="Trevor" src={trevPhoto} />}
          className="cardBackground"

          
          title="Wyoming Tribune Eagle"
          subheader="Nov. 23, 2014"
        />
        <CardMedia
          component="img"
          height="194"
          image={trooperPhoto}
          alt="Missile Silos"
        />
        <CardContent           className="cardBackground"
>
          <Typography paragraph id="clipHeadline">
          <a
            href="https://oklahomawatch.org/2021/07/30/as-other-governors-pull-out-vaccine-media-blitz-oklahomas-stitt-largely-silent/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Memo: Troopers must hit numbers


                </a>
          </Typography>
          <Typography paragraph>
            CHEYENNE - State troopers are being told to meet citation quotas or
            risk missing out on pay raises or job promotions.
          </Typography>
          <Typography paragraph>
              An internal document obtained by the Wyoming Tribune Eagle shows
              the Wyoming Highway Patrol has started to require troopers to make
              certain numbers of traffic stops and write a certain number of
              citations per year.
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
          <CardContent           className="cardBackground"
>
            <Typography paragraph>
              An internal document obtained by the Wyoming Tribune Eagle shows
              the Wyoming Highway Patrol has started to require troopers to make
              certain numbers of traffic stops and write a certain number of
              citations per year.
            </Typography>
            <Typography paragraph>
              The disclosure has prompted concerns from both law enforcement and
              civil liberties groups, as well as from troopers within the
              agency. They say this statistics-driven approach could increase
              the risks of questionable stops.
            </Typography>
            <Typography paragraph>
              "The general consensus is that it's not right for the public, and
              it's not what we are all about," said one active-duty trooper who
              spoke on condition of anonymity due to fears of retaliation. "My
              concern with it is it could lead to officers making stuff up to
              make their numbers."
            </Typography>

            <CardActions>
            <Button size="small"> <a
                  href="https://oklahomawatch.org/2021/07/30/as-other-governors-pull-out-vaccine-media-blitz-oklahomas-stitt-largely-silent/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a></Button>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    </>
  );
}
