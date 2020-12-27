import React from 'react';
import useStyles from './messaging.style';
import MessageComponent from './message.component';
import MessagingHeaderComponent from './messaging-header.component';
import { TextField, IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import HasRaisedHandComponent from './has-raised-hand.component';
import dotenv from 'dotenv';

let socket = io.connect(
  `https://${process.env.REACT_APP_BASE_URL}:5000/messaging`,
  {
    secure: true,
    rejectUnauthorized: false,
  }
);

function MessagingComponent(props) {
  const classes = useStyles();
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [userId, setUserId] = React.useState(props.userId);
  React.useEffect(() => {
    socket.emit('join', { room: props.room, userId: userId });

    socket.on('sendToAll', (data) => {
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
    socket.emit('sendMessage', {
      message: message,
      senderId: userId,
      userRole: props.userRole,
    });
  };
  return (
    <div className={classes.messagingViewContainer}>
      <MessagingHeaderComponent />
      <div className={classes.messages}>
        {messages.map((data, index) => {
          if (data.raiseHandComponent)
            return (
              <MessageComponent
                hasRaisedHandComponent={data.raiseHandComponent}
                message={data.message}
                currentUser={userId === data.senderId ? true : false}
                userRole={data.userRole}
                key={uuidv4()}
              />
            );
          else {
            return (
              <MessageComponent
                message={data.message}
                currentUser={userId === data.senderId ? true : false}
                key={uuidv4()}
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
export default MessagingComponent;
