import React from 'react';
import { Avatar } from '@material-ui/core';

function VoiceChatAvatarComponent(props) {
  return (
    <li style={props.styleProps}>
      <Avatar />
    </li>
  );
}
export default VoiceChatAvatarComponent;
