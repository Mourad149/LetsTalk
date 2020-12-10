import React from 'react';
import useStyles from './messaging.style';
import MessageComponent from './message.component';

function MessagingComponent() {
  const classes = useStyles();
  return (
    <div className={classes.messagingViewContainer}>
      <MessageComponent currentUser={true} />
      <MessageComponent currentUser={false} />
      <MessageComponent currentUser={true} />
      <MessageComponent currentUser={false} />
      <MessageComponent currentUser={true} />
      <MessageComponent currentUser={false} />
    </div>
  );
}
export default MessagingComponent;
