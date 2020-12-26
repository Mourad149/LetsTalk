import React from 'react';
import useStyles from './voice-chat.style';
import VoiceChatOptionsComponent from './voice-chat-options.component';
import VoiceChatCircularComponent from './voice-chat-circular.component';
import Peer from 'peerjs';
import io from 'socket.io-client';
import dotenv from 'dotenv';
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

  React.useEffect(() => {
    myPeer.on('open', function () {
      console.log('My PeerJS ID is:', myPeer.id);
      socket.emit('join', { room: props.room, userId: userId });
    });
  }, []);
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(
        // Only request audio
        { video: false, audio: true }
      )
      .then((stream) => {
        socket.on('user-connected', (data) => {
          if (props.userId !== data.newUserId) {
            const call = myPeer.call(data.newUserId, stream);
            const audio = document.createElement('audio');
            audio.srcObject = stream;
            audio.play();
            console.log(userId);
          }
        });
        myPeer.on('call', (call) => {
          call.answer(stream);
          call.on('stream', (stream) => {
            console.log('heheh');
          });
        });
      });
  }, []);

  return (
    <div className={classes.voiceChatContainer}>
      <VoiceChatCircularComponent />
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
export default VoiceChatComponent;
