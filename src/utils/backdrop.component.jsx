import React from 'react';
import useStyles from './backdrop.style';
import { CircularProgress } from '@material-ui/core';
function BackdropComponent() {
  const classes = useStyles();
  return (
    <div className={classes.backdropContainer}>
      <CircularProgress />
    </div>
  );
}
export default BackdropComponent;
