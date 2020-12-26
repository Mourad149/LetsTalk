import React from 'react';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import PanToolIcon from '@material-ui/icons/PanTool';
import CallEndIcon from '@material-ui/icons/CallEnd';
import io from 'socket.io-client';
import useStyles from './voice-chat.style';
import dotenv from 'dotenv';
let socket = io.connect(
  `https://${process.env.REACT_APP_BASE_URL}:5000/messaging`,
  {
    secure: true,
    rejectUnauthorized: false,
  }
);

var classNames = require('classnames');
function VoiceChatOptionsComponent(props) {
  const classes = useStyles();
  const [userId, setUserId] = React.useState(props.userId);
  const [userRole, setUserRole] = React.useState(props.userRole);

  React.useEffect(() => {
    socket.emit('join', { room: props.room });
  }, []);
  const raiseHand = () => {
    socket.emit('handRaised', {
      handRaiser: userId,
      userRole: userRole,
      senderId: userId,
    });
  };
  return (
    <div className={classes.voiceOptionsContainer}>
      <IconButton className={classNames(classes.options, classes.micIcon)}>
        <MicNoneIcon />
      </IconButton>
      <IconButton className={classNames(classes.options, classes.endCallIcon)}>
        <CallEndIcon />
      </IconButton>
      <IconButton
        className={classNames(classes.options, classes.handIcon)}
        onClick={() => raiseHand()}
      >
        <PanToolIcon />
      </IconButton>
    </div>
  );
}
export default VoiceChatOptionsComponent;
