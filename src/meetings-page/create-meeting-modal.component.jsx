import React from 'react';
import { Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import useStyles from './profile-card.style';
import CreateMeetingForm from './create-meeting-form.component';

const CreateMeetingModal = (props) => {
  const classes = useStyles();
  return (
    <div className={props.cssClass}>
      <div className={classes.modalMain} onClick={null}>
        <Typography align="center" className={classes.modalTitle} paragraph>
          Create a new meeting !
        </Typography>
        <HighlightOffIcon
          onClick={props.hideModal}
          className={classes.modalClose}
        />
        <CreateMeetingForm hideModal={props.hideModal} />
      </div>
    </div>
  );
};
export default CreateMeetingModal;
