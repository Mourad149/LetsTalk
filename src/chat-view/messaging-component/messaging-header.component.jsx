import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import useStyles from "./messaging.style";
import PeopleIcon from "@material-ui/icons/People";
import ForumIcon from "@material-ui/icons/Forum";
function MessagingHeaderComponent(props) {
  const classes = useStyles();
  return (
    <Paper square elevation={5} className={classes.messagingHeaderContainer}>
      <IconButton
        className={classes.messageIconButton}
        onClick={() => props.onSwitch(0)}
      >
        <ForumIcon />
      </IconButton>
      <IconButton
        className={classes.messageIconButton}
        onClick={() => props.onSwitch(1)}
      >
        <PeopleIcon />
      </IconButton>
    </Paper>
  );
}
export default MessagingHeaderComponent;
