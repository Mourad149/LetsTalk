import React from 'react';
import { Grid } from '@material-ui/core';
import MessagingComponent from './messaging-component/messaging.component';
import useStyles from './chat-view.style';
import VoiceChatComponent from './voice-chat-component/voice-chat.component';
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client';

function ChatViewComponent(props) {
  const classes = useStyles();
  const [userId, setUserId] = React.useState(uuidv4());
  const [userRole, setUserRole] = React.useState('admin');

  return (
    <Grid container className={classes.chatViewGridContainer}>
      <Grid item md={9} className={classes.voiceChatGridContainer}>
        <VoiceChatComponent
          room={props.match.params.id}
          userId={userId}
          userRole={userRole}
        />
      </Grid>
      <Grid item md={3} className={classes.gridMessagesContainer}>
        <MessagingComponent
          room={props.match.params.id}
          userId={userId}
          userRole={userRole}
        />
      </Grid>
    </Grid>
  );
}
export default ChatViewComponent;
