import React from 'react';
import useStyles from './meeting-card.style';
import PeopleIcon from '@material-ui/icons/People';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useTransition, animated } from 'react-spring';
import { useHistory } from 'react-router';
const MeetingCard = (props) => {
  const classes = useStyles();
  const [show, set] = React.useState(false);
  const redirect = (path) => {
    return props.history.push(path);
  };
  const transitions = useTransition(show, (item) => item.key, {
    from: {
      transform: `translate3d(${2 * props.index * 200}px,${
        (props.index - 1) * 100
      }px,0px)`,

      opacity: '0.3',
    },
    enter: { transform: `translate3d(0px,0,0)`, opacity: '1' },

    leave: {
      transform: `translate3d(${2 * props.index * -200}px,${
        (props.index - 1) * -200
      }px,0)`,

      opacity: '0.3',
    },
    config: {
      duration: 400,
    },
  });
  return transitions.map(({ item, key, props: style }) => (
    <animated.div style={style} className={classes.meetingCard}>
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
      <div
        onClick={() =>
          redirect(
            `/meetings/${true}/${false}/${props.currentUserId}/${
              props.meetingId
            }`
          )
        }
        className={classes.joinBox}
      >
        <ArrowForwardIosIcon />
      </div>
    </animated.div>
  ));
};

export default MeetingCard;
