import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './home-page.style';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';
function HomePageComponent() {
  const classes = useStyles();
  const [show, set] = React.useState(false);
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 700,
    },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',

        ...props,
      }}
    >
      <Typography className={classes.homePageBanner} align="center">
        Welcome to Let's Talk, here you can share about your thoughts !
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
    </animated.div>
  ));
}
export default HomePageComponent;
