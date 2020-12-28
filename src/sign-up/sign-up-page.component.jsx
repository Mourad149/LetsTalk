import React from 'react';
import { useTransition, animated } from 'react-spring';

import useStyles from './sign-up.style';
import SignUpContainer from './sign-up-container-component';
import Logo from '../assets/sign-up-svg';
import { Grid, Typography } from '@material-ui/core';
const SignUpPage = (props) => {
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
    <animated.div style={{ display: 'flex', width: '100%', ...props }}>
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
    </animated.div>
  ));
};
export default SignUpPage;
