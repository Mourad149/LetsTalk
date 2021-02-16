import React from 'react';

import useStyles from './meetings-page.style';
import ProfileCard from './profile-card.component';
import MeetingsList from './meetings-list.component';
import { Grid, Divider } from '@material-ui/core';
import CreateMeetingModal from './create-meeting-modal.component';
import { connect } from 'react-redux';

const MeetingsPage = (props) => {
  const classes = useStyles();

  const [state, setState] = React.useState({ showModal: false });
  const [modalClassName, setModalClassName] = React.useState(
    state.showModal ? classes.displayBlock : classes.displayNone
  );
  const showModal = () => {
    setState({ showModal: true });
  };

  const hideModal = () => {
    setState({ showModal: false });
  };
  React.useEffect(() => {
    setModalClassName(
      state.showModal ? classes.displayBlock : classes.displayNone
    );
  }, [state.showModal]);

  return (
    <Grid container className={classes.meetingsPage}>
      <Grid md={3} item className={classes.gridItemContainer}>
        <ProfileCard
          anonym={props.match.params.anonym}
          anonymUserId={props.match.params.userId}
          isAdmin={props.match.params.isAdmin}
          showModal={() => showModal()}
          currentUser={props.currentUser}

        />
        <div className={classes.dividerContainer}>
          <Divider orientation="vertical" />
        </div>
      </Grid>
      <Grid md={9} item className={classes.gridItemContainer}>
        <MeetingsList {...props} cookies={props.cookies} />

      </Grid>
      <CreateMeetingModal cssClass={modalClassName} hideModal={hideModal} />
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUserReducer,
  };
};

export default connect(mapStateToProps)(MeetingsPage);
