import React from 'react';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import PanToolIcon from '@material-ui/icons/PanTool';
import CallEndIcon from '@material-ui/icons/CallEnd';
import useStyles from './voice-chat.style';
var classNames = require('classnames');
function VoiceChatOptionsComponent() {
  const classes = useStyles();
  return (
    <div className={classes.voiceOptionsContainer}>
      <IconButton className={classNames(classes.options, classes.micIcon)}>
        <MicNoneIcon />
      </IconButton>
      <IconButton className={classNames(classes.options, classes.endCallIcon)}>
        <CallEndIcon />
      </IconButton>
      <IconButton className={classNames(classes.options, classes.handIcon)}>
        <PanToolIcon />
      </IconButton>
    </div>
  );
}
export default VoiceChatOptionsComponent;
