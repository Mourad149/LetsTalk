import React from 'react';
import { Avatar } from '@material-ui/core';
import useStyles from './voice-chat.style';
function VoiceChatAvatarComponent(props) {
  const classes = useStyles();
  return (
    <li style={props.props.styles}>
      <Avatar className={classes.participantsAvatar} />
    </li>
  );
}
export default VoiceChatAvatarComponent;
