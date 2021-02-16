import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './home-page.style';
import { useTransition, animated } from 'react-spring';
import { div } from 'react-router-dom';
import AnonymousLogoComponent from '../assets/anonymous-logo.component';
import { useHistory } from 'react-router';
function HomePageComponent() {
  const classes = useStyles();
  const [show, set] = React.useState(false);
  const history = useHistory();

  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 700,
    },
  });
  const redirect = (path) => {
    return history.push(path);
  };

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
      <div className={classes.primaryButtonsContainer}>
        <div className={classes.buttonsContainer}>
          <div
            className={classes.homePageButton}
            style={{ textDecoration: 'none' }}
            onClick={() => redirect('/signup')}

          >
            <Typography className={classes.buttonText} align="center">
              Subscribe
            </Typography>
          </div>
          <div
            className={classes.homePageButton}
            style={{ textDecoration: 'none' }}
            onClick={() => redirect('/login')}

          >
            <Typography className={classes.buttonText} align="center">
              Login
            </Typography>
          </div>
        </div>
        <div
          className={classes.joinAnonymButton}
          style={{ textDecoration: 'none' }}
          onClick={() => redirect(`/meetings/${true}/${false}/${2}`)}

        >
          <AnonymousLogoComponent />
          <Typography className={classes.anonymButtonText} align="center">
            Or join meetings anonymously
          </Typography>
        </div>

      </div>
    </animated.div>
  ));
}
export default HomePageComponent;
