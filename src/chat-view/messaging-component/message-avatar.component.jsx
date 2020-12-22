import React from 'react';
import { Avatar } from '@material-ui/core';
import useStyles from './messaging.style';
function MessageAvatarComponent(props) {
  const classes = useStyles();
  return (
    <Avatar
      className={
        props.currentUser
          ? classes.messageAvatarRight
          : classes.messageAvatarLeft
      }
    />
  );
}
export default MessageAvatarComponent;
