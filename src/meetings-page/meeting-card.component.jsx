import React from "react";
import useStyles from "./meeting-card.style";
import PeopleIcon from "@material-ui/icons/People";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MeetingCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.meetingCard}>
      <p className={classes.themeBox}>#Depression</p>
      <p className={classes.hostBox}>Hosted by Zakaria</p>
      <div className={classes.participantBox}>
        <PeopleIcon className={classes.icon} fontSize="small" />
        <span>20</span>
      </div>
      <p className={classes.startBox}>Starts at 10pm</p>
      <div className={classes.joinBox}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};
export default MeetingCard;
