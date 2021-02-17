import React from "react";
import axios from "axios";
import useStyles from "./messaging.style";
import ParticipantComponent from "./participant.component";
import { io } from "socket.io-client";
function ParticipantListComponent(props) {
  const [participants, setParticipants] = React.useState([]);
  const [connectedUsers, setConnectedUsers] = React.useState();

  const classes = useStyles();

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
  React.useEffect(() => {
    // axios
    //   .get(`https://${process.env.REACT_APP_BASE_URL}:5000/getConnectedUsers`, {
    //     headers: {
    //       Authorization: `Bearer ${props.cookies.get("token")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.connectedUsers);
    //     setConnectedUsers(res.data.connectedUsers);
    //   })
    //   .catch((err) => console.log(err));
    let socket = io.connect(
      `https://${process.env.REACT_APP_BASE_URL}:5000/onConnect`,
      {
        secure: true,
        rejectUnauthorized: false,
      }
    );
    socket.on("connectedUsers", (data) => {
      console.log(data.connectedUsers);
      setConnectedUsers(data.connectedUsers);
    });
  }, []);

  return (
    <div classeName={classes.messagingViewContainer}>
      <div className={classes.participantsViewContainer}>
        {props?.participants.map((participant, index) => {
          return (
            <ParticipantComponent
              participantObject={participant}
              userRole={props.userRole}
              connected={
                connectedUsers && connectedUsers[participant._id] ? true : false
              }
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ParticipantListComponent;
