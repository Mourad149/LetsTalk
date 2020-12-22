import React from 'react';
import VoiceChatAvatarComponent from './voice-chat-avatar.component';
import useStyles from './voice-chat.style';
import { Avatar } from '@material-ui/core';
import io from 'socket.io-client';
let socket = io('http://localhost:5000/messaging');

function VoiceChatCircularComponent() {
  const classes = useStyles();
  var list = [
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
    <VoiceChatAvatarComponent />,
  ];
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100% - 6rem)',
      }}
    >
      <ul className={classes.list}>
        <Avatar className={classes.organizerAvatar} />
        {list.map((item, index) => {
          var offsetAngle = 360 / list.length;
          var rotateAngle = offsetAngle * index;

          return (
            <VoiceChatAvatarComponent
              props={{
                styles: {
                  transform: `rotate(${rotateAngle}deg) translate(0,-200px) rotate(-${rotateAngle}deg)`,
                  listStyle: 'none',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                },
              }}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default VoiceChatCircularComponent;
