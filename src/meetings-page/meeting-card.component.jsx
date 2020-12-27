import React from 'react';
import useStyles from './meeting-card.style';
import PeopleIcon from '@material-ui/icons/People';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const MeetingCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.meetingCard}>
      <Typography className={classes.themeBox}>#{props.theme}</Typography>
      <Typography className={classes.hostBox}>
        Hosted by {props.host}
      </Typography>
      <div className={classes.participantBox}>
        <PeopleIcon className={classes.icon} fontSize="small" />
        <span>{props.participants}</span>
      </div>
      <Typography className={classes.startBox}>
        Starts {props.startTimeStamps}
      </Typography>
      <Link to="/meetings/1" className={classes.joinBox}>
        <ArrowForwardIosIcon />
      </Link>
    </div>
  );
};
export default MeetingCard;
