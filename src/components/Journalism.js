import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const Journalism = () => {
    return (
        <>
        <h1>Award-winning journalist</h1>
        <h4>Before the summer of 2022, I was an investigatve journalist with Oklahoma Watch, a non-profit investigatve journalism group based in Okahoma City. For the past six years, I was Oklahoma Watch's political and democracy beat reporter. Before that, I spent five years as the Wyoming Tribune Eagle's statehouse reporter and before that worked for Community Newspaper Holdings Inc.'s chain of newspapers in Oklahoma, the Staunton News Leader and the Indianapolis Star as a Pulliam Fellow.
</h4>
        <div id="journalismExp">
            <h2>Experience</h2>
            <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
        </div>
        <div id="journalismClips">
            <h2>Clips</h2>
        </div>
        <div id="journalismClips">
            <h2>Awards</h2>
        </div>
        
        
        
        
        
        </>
    )
}
export default Journalism;
