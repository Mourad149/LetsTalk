import React from 'react';
import useStyles from './messaging.style';
import MessageComponent from './message.component';
import MessagingHeaderComponent from './messaging-header.component';
import { TextField, IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import io from 'socket.io-client';

let socket = io('http://localhost:5000/messaging');

function MessagingComponent() {
  const classes = useStyles();
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    socket.on('sendToAll', (data) => {
      let { message } = data;
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message);
    });
  }, []);
  React.useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);
  const sendMessage = () => {
    socket.emit('sendMessage', { message });
  };
  return (
    <div className={classes.messagingViewContainer}>
      <MessagingHeaderComponent />
      <div className={classes.messages}>
        {messages.map((message, index) => {
          return <MessageComponent message={message} currentUser={false} />;
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
