import React from 'react';
import useStyles from './messaging.style';
import MessageAvatarComponent from './message-avatar.component';
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
    </div>
  );
}
export default MessageBoxComponent;
