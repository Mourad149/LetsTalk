import React from 'react';
import useStyles from './voice-chat.style';
import VoiceChatOptionsComponent from './voice-chat-options.component';
import VoiceChatCircularComponent from './voice-chat-circular.component';
function VoiceChatComponent() {
  const classes = useStyles();
  return (
    <div className={classes.voiceChatContainer}>
      <VoiceChatCircularComponent />
      <div className={classes.voiceChatOptionsDiv}>
        <VoiceChatOptionsComponent />
      </div>
    </div>
  );
}
export default VoiceChatComponent;
