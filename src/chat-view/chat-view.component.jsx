import React from 'react';
import { Grid } from '@material-ui/core';
import MessagingComponent from './messaging-component/messaging.component';

function ChatViewComponent() {
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item md={8}></Grid>
      <Grid item md={4} style={{ height: '100%', display: 'flex' }}>
        <MessagingComponent />
      </Grid>
    </Grid>
  );
}
export default ChatViewComponent;
