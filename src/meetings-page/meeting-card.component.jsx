import React from "react";
import useStyles from "./meeting-card.style";
import PeopleIcon from "@material-ui/icons/People";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

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
      <div className={classes.joinBox}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};
export default MeetingCard;
