import React from "react";
import axios from "axios";
import useStyles from "./messaging.style";
import ParticipantComponent from "./participant.component";

function ParticipantListComponent(props) {
  const [participants, setParticipants] = React.useState([]);
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
  const classes = useStyles();
  return (
    <div classeName={classes.messagingViewContainer}>
      <div className={classes.participantsViewContainer}>
        {participants.map((participant, index) => {
          return (
            <ParticipantComponent participantObject={participant} key={index} />
          );
        })}
      </div>
    </div>
  );
}
export default ParticipantListComponent;
