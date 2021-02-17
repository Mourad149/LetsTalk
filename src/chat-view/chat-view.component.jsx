import React from "react";
import { Grid } from "@material-ui/core";
import MessagingComponent from "./messaging-component/messaging.component";
import useStyles from "./chat-view.style";
import VoiceChatComponent from "./voice-chat-component/voice-chat.component";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import axios from "axios";
function ChatViewComponent(props) {
  const classes = useStyles();
  const [userId, setUserId] = React.useState(props.match.params.userId);
  const [participants, setParticipants] = React.useState([]);

  const [userRole, setUserRole] = React.useState(
    props.match.params.isAdmin === "true" ? "coach" : "participant"
  );
  React.useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_BASE_URL}:5000/getRegistredUsers`, {
        headers: {
          Authorization: `Bearer ${props.cookies.get("token")}`,
        },
      })
      .then((res) => {
        setParticipants(res.data.participants);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid container className={classes.chatViewGridContainer}>
      <Grid item md={9} className={classes.voiceChatGridContainer}>
        <VoiceChatComponent
          room={props.match.params.meetingId}
          userId={userId}
          userRole={userRole}
          participants={participants}
        />
      </Grid>
      <Grid item md={3} className={classes.gridMessagesContainer}>
        <MessagingComponent
          room={props.match.params.meetingId}
          userId={userId}
          userRole={userRole}
          currentUserObject={props.currentUserReducer}
          cookies={props.cookies}
          participants={participants}
        />
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUserReducer: state.currentUserReducer,
  };
};
export default connect(mapStateToProps)(ChatViewComponent);
