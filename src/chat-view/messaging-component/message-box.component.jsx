import React from 'react';
import useStyles from './messaging.style';
import MessageAvatarComponent from './message-avatar.component';
import { Typography } from '@material-ui/core';
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
      <Typography className={classes.textMessage}>
        Dwzt 2 entretiens mea whd charika mqwda bzf f Franca
      </Typography>
    </div>
  );
}
export default MessageBoxComponent;
