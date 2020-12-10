import React from "react";

import useStyles from "./meetings-list.style";
import MeetingCard from "./meeting-card.component";

const MeetingsList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.meetingsList}>
      <h5>Available meetings</h5>
      <MeetingCard></MeetingCard>
    </div>
  );
};
export default MeetingsList;
