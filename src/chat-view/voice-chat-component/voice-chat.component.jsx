import React from "react";
import useStyles from "./voice-chat.style";
import VoiceChatOptionsComponent from "./voice-chat-options.component";
import VoiceChatCircularComponent from "./voice-chat-circular.component";
import Peer from "peerjs";
import io from "socket.io-client";
import dotenv from "dotenv";
import { toast, ToastContainer } from "react-toastify";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { fireNotif } from "../../reducers-actions/notification.action";

let socket = io.connect(
  `https://${process.env.REACT_APP_BASE_URL}:5000/messaging`,
  {
    secure: true,
    rejectUnauthorized: false,
  }
);
let myPeer = new Peer();

function VoiceChatComponent(props) {
  const classes = useStyles();
  const [userId, setUserId] = React.useState(props.userId);
  const [audio, setAudio] = React.useState();
  const [connectedUsersToMeeting, setConnectedUsersToMeeting] = React.useState(
    []
  );

  React.useEffect(() => {
    let socket = io.connect(
      `https://${process.env.REACT_APP_BASE_URL}:5000/messaging`,
      {
        secure: true,
        rejectUnauthorized: false,
      }
    );

    let myPeer = new Peer();

    myPeer.on("open", function () {
      console.log("My PeerJS ID is:", myPeer.id);

      socket.emit("joinMeeting", { room: props.room, userId: userId });
    });

    socket.on("user-connected", (data) => {
      props.fireNotif({
        component: (
          <div className={classes.toastBody}>
            <NewReleasesIcon className={classes.toastIcon} />
            <Typography>User has joined the meeting</Typography>{" "}
          </div>
        ),
        open: true,
      });

      navigator.mediaDevices
        .getUserMedia(
          // Only request audio
          { video: false, audio: true }
        )
        .then((stream) => {
          if (props.userId !== data.newUserId) {
            const call = myPeer.call(data.newUserId, stream);
            const audio = document.createElement("audio");
            audio.srcObject = stream;
            audio.play();
            console.log(userId);
          }
          myPeer.on("call", (call) => {
            call.answer(stream);
            call.on("stream", (stream) => {
              console.log("heheh");
            });
          });
        });
    });
    socket.emit("getConnectedUsersToMeeting", {
      room: props.room,
      userId: userId,
    });
    socket.on("connectedUsersToMeeting", (data) => {
      let areConnectedToThisMeeting = [];
      for (const key in data.connectedUsersToMeeting) {
        if (data.connectedUsersToMeeting[key] === props.room) {
          areConnectedToThisMeeting.push(key);
        }
      }

      console.log(areConnectedToThisMeeting);
      setConnectedUsersToMeeting(areConnectedToThisMeeting);
    });
  }, []);

  return (
    <div className={classes.voiceChatContainer}>
      <VoiceChatCircularComponent participants={connectedUsersToMeeting} />
      <div className={classes.voiceChatOptionsDiv}>
        <VoiceChatOptionsComponent
          room={props.room}
          userId={props.userId}
          userRole={props.userRole}
        />
      </div>
    </div>
  );
}
export default connect(null, { fireNotif })(VoiceChatComponent);
