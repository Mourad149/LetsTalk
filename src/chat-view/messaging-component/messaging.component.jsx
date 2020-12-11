import React from 'react';
import useStyles from './messaging.style';
import MessageComponent from './message.component';
import MessagingHeaderComponent from './messaging-header.component';
import { TextField, IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

function MessagingComponent() {
  const classes = useStyles();
  return (
    <div className={classes.messagingViewContainer}>
      <MessagingHeaderComponent />
      <div className={classes.messages}>
        <MessageComponent currentUser={true} />
        <MessageComponent currentUser={false} />
        <MessageComponent currentUser={true} />
        <MessageComponent currentUser={false} />
      </div>
      <div className={classes.messageFieldContainer}>
        <TextField
          InputProps={{ disableUnderline: true }}
          className={classes.messageField}
        />
        <IconButton className={classes.sendButton}>
          <TelegramIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
export default MessagingComponent;
