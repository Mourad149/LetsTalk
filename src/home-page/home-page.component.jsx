import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './home-page.style';
import { Link } from 'react-router-dom';
function HomePageComponent() {
  const classes = useStyles();
  return (
    <div className={classes.homePageContainer}>
      <Typography className={classes.homePageBanner} align="center">
        Welcome to Let's Talk, here you can share about your toughts !
      </Typography>
      <div className={classes.buttonsContainer}>
        <Link
          className={classes.homePageButton}
          style={{ textDecoration: 'none' }}
          to="/signup"
        >
          <Typography className={classes.buttonText} align="center">
            Subscribe
          </Typography>
        </Link>
        <Link
          className={classes.homePageButton}
          style={{ textDecoration: 'none' }}
          to="/login"
        >
          <Typography className={classes.buttonText} align="center">
            Login
          </Typography>
        </Link>
      </div>
    </div>
  );
}
export default HomePageComponent;
