import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import WorkIcon from '@mui/icons-material/Work';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Clips from './Clips'


const Journalism = () => {
  return (
    <>
      <h1>Award-winning journalist</h1>
      <h4>
        Before the summer of 2022, I was an investigatve journalist with
        Oklahoma Watch, a non-profit investigatve journalism group based in
        Okahoma City. For the past six years, I was Oklahoma Watch's political
        and democracy beat reporter. Before that, I spent five years as the
        Wyoming Tribune Eagle's statehouse reporter and before that worked for
        Community Newspaper Holdings Inc.'s chain of newspapers in Oklahoma, the
        Staunton News Leader and the Indianapolis Star as a Pulliam Fellow.
      </h4>
      <div id="journalismExp">
        <h2>Experience</h2>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
             <CalendarMonthIcon/> 2004-2008
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
                Indiana University
              </Typography>
              <Typography id="timelineSubhead">B.A. in Journalism, B.A. in Political Science, Indiana Daily Student Editor-in-Chief</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
              <CalendarMonthIcon/> Summer 2008
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
                Indianapolis Star
              </Typography>
              <Typography id="timelineSubhead">Pulliam Fellow</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
              <CalendarMonthIcon/> 2008-2010
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
                Staunton News Leader
              </Typography>
              <Typography id="timelineSubhead">City/County Government Reporter</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
             <CalendarMonthIcon/> 2010-2011
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
                Community Newspaper Holding Inc. (CNHI)
              </Typography>
              <Typography id="timelineSubhead">Capitol reporter for more than a chain that included 14 daily Oklahoma newspapers</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
              <CalendarMonthIcon/> 2011-2016
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
                Wyoming Tribune Eagle
              </Typography>
              <Typography id="timelineSubhead">State government and military reporter</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
              <CalendarMonthIcon/> 2016-2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
                Oklahoma Watch
              </Typography>
              <Typography id="timelineSubhead">Capitol/Democracy Reporter</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
              <CalendarMonthIcon/> Winter 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
              University of Oklahoma Outreach Coding Bootcamp
              </Typography>
              <Typography id="timelineSubhead">Full-Stack Web Developer Certificate</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
            id="timelineDate"
              sx={{ m: "auto 0" }}
            >
              <CalendarMonthIcon/> Now
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <EmojiPeopleOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography id="timelineHeader" component="span">
              Job Search
              </Typography>
              <Typography id="timelineSubhead">Hire me!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div id="journalismClips">
        <h2>Clips</h2>
        <Clips />
      </div>
      <div id="journalismClips">
        <h2>Awards</h2>
      </div>
    </>
  );
};
export default Journalism;
