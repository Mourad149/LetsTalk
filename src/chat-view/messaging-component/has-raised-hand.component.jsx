import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './messaging.style';
import PanToolIcon from '@material-ui/icons/PanTool';
import { Typography } from '@material-ui/core';

function HasRaisedHandComponent() {
  const classes = useStyles();
  return (
    <div className={classes.hasRaisedHandContainer}>
      <Button className={classes.acceptRaiseButton}>accept</Button>
      <Button className={classes.declineRaiseButton}>decline</Button>
    </div>
  );
}
export default HasRaisedHandComponent;
