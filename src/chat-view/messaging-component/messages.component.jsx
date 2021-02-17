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

let socket = io.connect(
  `https://${process.env.REACT_APP_BASE_URL}:5000/messaging`,
  {
    secure: true,
    rejectUnauthorized: false,
  }
);
function MessagesComponent(props) {
  const classes = useStyles();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [userId, setUserId] = React.useState(props.userId);
  React.useEffect(() => {
    axios
      .get(
        `https://${process.env.REACT_APP_BASE_URL}:5000/getMessages/${props.room}`,
        {
          headers: {
            Authorization: `Bearer ${props.cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setMessages(res.data[0].messages);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    socket.emit("join", { room: props.room, userId: userId });

    socket.on("sendToAll", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(message);
    });
  }, []);
  React.useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);
  const sendMessage = () => {
    socket.emit("sendMessage", {
      message: message,
      senderId: userId,
      senderName:
        props.currentUserObject?.firstName +
        " " +
        props.currentUserObject?.lastName,
      userRole: props.userRole,
      meetingId: props.room,
      userPdp: props.currentUserObject?.image,
      userRole: props.currentUserObject?.userType,
    });
  };
  return (
    <div className={classes.messagesViewContainer}>
      <div className={classes.messages}>
        {messages.map((data, index) => {
          if (data.raiseHandComponent)
            return (
              <MessageComponent
                hasRaisedHandComponent={data.raiseHandComponent}
                message={data.text}
                currentUser={userId === data.senderCred.userId ? true : false}
                userRole={data.senderCred.userRole}
                userPdp={data.senderCred.image}
                senderName={data.senderCred.senderName}
                key={uuidv4()}
              />
            );
          else {
            return (
              <MessageComponent
                message={data.text}
                currentUser={userId === data.senderCred.userId ? true : false}
                key={uuidv4()}
                userPdp={data.senderCred.image}
                senderName={data.senderCred.senderName}
              />
            );
          }
        })}
      </div>
      <div className={classes.messageFieldContainer}>
        <TextField
          InputProps={{ disableUnderline: true }}
          className={classes.messageField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton
          className={classes.sendButton}
          onClick={() => sendMessage(message)}
        >
          <TelegramIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
export default MessagesComponent;
