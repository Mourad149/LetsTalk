import React from "react";
import useStyles from "./messaging.style";
import MessageComponent from "./message.component";
import MessagingHeaderComponent from "./messaging-header.component";
import { TextField, IconButton } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import HasRaisedHandComponent from "./has-raised-hand.component";
import dotenv from "dotenv";
import axios from "axios";
import MessagesComponent from "./messages.component";
import ParticipantListComponent from "./participant-list.component";

function MessagingComponent(props) {
  const classes = useStyles();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [userId, setUserId] = React.useState(props.userId);
  const [switchTo, setSwitchTo] = React.useState(0);

  const onSwitch = (value) => setSwitchTo(value);
  return (
    <div className={classes.messagingViewContainer}>
      <MessagingHeaderComponent onSwitch={(value) => onSwitch(value)} />
      {switchTo === 0 ? (
        <MessagesComponent
          room={props.room}
          userId={props.userId}
          userRole={props.userRole}
          currentUserObject={props.currentUserObject}
          cookies={props.cookies}
        />
      ) : (
        <ParticipantListComponent cookies={props.cookies} />
      )}
    </div>
  );
}

export default MessagingComponent;
