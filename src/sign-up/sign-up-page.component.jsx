import React from 'react';

import useStyles from './sign-up.style';
import SignUpContainer from './sign-up-container-component';
import Logo from '../assets/sign-up-svg';
import { Grid, Typography } from '@material-ui/core';
const SignUpPage = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.page}>
      <Grid item md={7} className={classes.gridItemContainer}>
        <Typography className={classes.bannerText} align="center" paragraph>
          Welcome to Let's Talk !
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.gridItemContainer}>
        <SignUpContainer />
      </Grid>
    </Grid>
  );
};
export default SignUpPage;
