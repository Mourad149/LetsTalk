import React from 'react';
import useStyles from './messaging.style';
import MessageAvatarComponent from './message-avatar.component';
import { Typography } from '@material-ui/core';
import HasRaisedHandComponent from './has-raised-hand.component';
import PanToolIcon from '@material-ui/icons/PanTool';

function MessageBoxComponent(props) {
  const classes = useStyles();
  return (
    <div
      className={
        props.currentUser
          ? classes.messageLeftContainer
          : classes.messageRightContainer
      }
    >
      <MessageAvatarComponent currentUser={props.currentUser} />
      <Typography
        align={props.currentUser ? 'left' : 'right'}
        className={
          props.currentUser
            ? classes.userNameLeftStyle
            : classes.userNameRightStyle
        }
      >
        Mourad Zinbi
      </Typography>
      {props.admin && props.hasRaisedHandComponent ? (
        [
          <Typography key={1} className={classes.textMessage}>
            <PanToolIcon fontSize="small" className={classes.hasRaisedIcon} />{' '}
            User asked for permission to speak
          </Typography>,

          <HasRaisedHandComponent key={2} />,
        ]
      ) : (
        <Typography className={classes.textMessage}>{props.message}</Typography>
      )}
    </div>
  );
}
export default MessageBoxComponent;
