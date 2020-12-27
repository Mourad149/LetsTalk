import React from 'react';

import useStyles from './meetings-page.style';
import ProfileCard from './profile-card.component';
import MeetingsList from './meetings-list.component';
import { Grid, Divider } from '@material-ui/core';

const MeetingsPage = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.meetingsPage}>
      <Grid md={3} item className={classes.gridItemContainer}>
        <ProfileCard />
        <div className={classes.dividerContainer}>
          <Divider orientation="vertical" />
        </div>
      </Grid>
      <Grid md={9} item className={classes.gridItemContainer}>
        <MeetingsList />
      </Grid>
    </Grid>
  );
};
export default MeetingsPage;
