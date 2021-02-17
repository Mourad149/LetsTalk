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
          ? classes.messageRightContainer
          : classes.messageLeftContainer
      }
    >
      <MessageAvatarComponent
        currentUser={props.currentUser}
        userPdp={props.userPdp}
      />

      <Typography
        align={props.currentUser ? 'right' : 'left'}
        className={
          props.currentUser
            ? classes.userNameRightStyle
            : classes.userNameLeftStyle
        }
      >
        {props.senderName}
      </Typography>
      {props.hasRaisedHandComponent ? (
        [
          <Typography key={1} className={classes.textMessage}>
            <PanToolIcon fontSize="small" className={classes.hasRaisedIcon} />{' '}
            {props.message}
          </Typography>,

          props.userRole === 'admin' ? (
            <HasRaisedHandComponent key={2} />
          ) : null,
        ]
      ) : (
        <Typography className={classes.textMessage}>{props.message}</Typography>
      )}
    </div>
  );
}
export default MessageBoxComponent;
