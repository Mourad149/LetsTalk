import React, { useState } from "react";

import useStyles from "./meetings-list.style";
import MeetingCard from "./meeting-card.component";

const MeetingsList = (props) => {
  const classes = useStyles();

  const [meetingsState, setMeetings] = useState([
    {
      id: 1,
      theme: "Depression",
      host: "Zakaria",
      participants: "20",
      startTime: "10 PM",
      startDate: "Feb 27",
    },
    {
      id: 2,
      theme: "Drugs addiction",
      host: "Morad",
      participants: "5",
      startTime: "11 PM",
      startDate: "Feb 27",
    },
    {
      id: 3,
      theme: "Alcoholism",
      host: "Saad",
      participants: "8",
      startTime: "9 PM",
      startDate: "Feb 27",
    },
  ]);

  const meetings = meetingsState.map((meeting) => (
    <MeetingCard
      key={meeting.id}
      theme={meeting.theme}
      host={meeting.host}
      participants={meeting.participants}
      startTime={meeting.startTime}
      startDate={meeting.startDate}
    />
  ));
  return (
    <div className={classes.meetingsList}>
      <h5>Available meetings</h5>
      {meetings}
    </div>
  );
};
export default MeetingsList;
