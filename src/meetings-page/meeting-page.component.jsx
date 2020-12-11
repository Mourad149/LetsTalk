import React from "react";

import useStyles from "./meetings-page.style";
import ProfileCard from "./profile-card.component";
import MeetingsList from "./meetings-list.component";

const MeetingsPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.meetingsPage}>
      <ProfileCard />
      <MeetingsList />
    </div>
  );
};
export default MeetingsPage;
