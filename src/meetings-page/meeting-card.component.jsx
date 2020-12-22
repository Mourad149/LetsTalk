import React from "react";
import useStyles from "./meeting-card.style";
import PeopleIcon from "@material-ui/icons/People";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const MeetingCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.meetingCard}>
      <p className={classes.themeBox}>#{props.theme}</p>
      <p className={classes.hostBox}>Hosted by {props.host}</p>
      <div className={classes.participantBox}>
        <PeopleIcon className={classes.icon} fontSize="small" />
        <span>{props.participants}</span>
      </div>
      <p className={classes.startBox}>
        Starts {props.startDate} at {props.startTime}
      </p>
      <Link to="/meetings/1" className={classes.joinBox}>
        <ArrowForwardIosIcon />
      </Link>
    </div>
  );
};
export default MeetingCard;
