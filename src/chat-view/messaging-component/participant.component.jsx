import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import useStyles from "./messaging.style";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function ParticipantComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.participantContainer}>
      <div className={classes.participantInfosContainer}>
        <Avatar src={props.participantObject.image} />
        <Typography>
          {props.participantObject.firstName +
            " " +
            props.participantObject.lastName}
        </Typography>
      </div>
      <div className={classes.participantActions}>
        <FiberManualRecordIcon
          className={classes.statusIcon}
          fontSize="small"
        />
        <AddCircleIcon className={classes.inviteUserIcon} />
      </div>
    </div>
  );
}
export default ParticipantComponent;
