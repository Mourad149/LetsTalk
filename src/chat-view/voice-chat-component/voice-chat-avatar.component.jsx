import React from 'react';
import { Avatar } from '@material-ui/core';
import useStyles from './voice-chat.style';
import { useSpring, animated } from 'react-spring';
function VoiceChatAvatarComponent(props) {
  const classes = useStyles();

  return (
    <animated.li style={props.props.styles}>
      <Avatar className={classes.participantsAvatar} />
    </animated.li>
  );
}
export default VoiceChatAvatarComponent;
