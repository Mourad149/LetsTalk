import React from 'react';
import { Grid } from '@material-ui/core';
import MessagingComponent from './messaging-component/messaging.component';
import useStyles from './chat-view.style';
import VoiceChatComponent from './voice-chat-component/voice-chat.component';

function ChatViewComponent() {
  const classes = useStyles();
  return (
    <Grid
      container
      style={{
        height: '100%',
      }}
    >
      <Grid item md={9} className={classes.voiceChatGridContainer}>
        <VoiceChatComponent />
      </Grid>
      <Grid item md={3} className={classes.gridMessagesContainer}>
        <MessagingComponent />
      </Grid>
    </Grid>
  );
}
export default ChatViewComponent;
