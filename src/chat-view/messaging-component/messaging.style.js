import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const messageMinWidth = '6rem';
const messageMaxWidth = '20rem';
const messageWidth = '18rem';
const messageMinHeight = '2.5rem';
const avatarWidth = '2rem';
const avatarHeight = '2rem';
const messageHeaderHeight = '4rem';
const messageFiledContainerHeight = '3rem';
const useStyles = makeStyles({
  messageLeftContainer: {
    display: 'flex',
    maxWidth: messageMaxWidth,
    minWidth: messageMinWidth,
    width: messageWidth,
    minHeight: messageMinHeight,
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
    borderRadius: '0px 18px 18px 18px',
    boxShadow:
      '8px 8px 12px 0 rgba(0, 0, 0, 0.25), -4px -4px 8px 0 rgba(255, 255, 255, 0.3)',

    margin: '20px',
    position: 'relative',
  },
  messageRightContainer: {
    display: 'flex',
    maxWidth: messageMaxWidth,
    minWidth: messageMinWidth,
    width: messageWidth,
    minHeight: messageMinHeight,
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
    borderRadius: '18px 0px 18px 18px',
    boxShadow:
      '-8px 8px 12px 0 rgba(0, 0, 0, 0.25), 4px 4px 8px 0 rgba(255, 255, 255, 0.3)',

    margin: '20px',
    position: 'relative',
  },
  messageAvatarRight: {
    width: avatarWidth,
    height: avatarHeight,
    position: 'absolute',
    top: '0%',
    bottom: '100%',
    top: '-15px',
    left: 'calc(100% - 20px)',
  },
  messageAvatarLeft: {
    width: avatarWidth,
    height: avatarHeight,
    position: 'absolute',
    top: '-15px',
    right: 'calc(100% - 20px)',

    bottom: '100%',
  },
  message: {
    display: 'flex',
    maxWidth: '25rem',
  },
  messagingViewContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  messages: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: `calc(100% - ${messageHeaderHeight} - ${messageFiledContainerHeight})`,
    maxHeight: `calc(100% - ${messageHeaderHeight} - ${messageFiledContainerHeight})`,
    minHeight: `calc(100% - ${messageHeaderHeight} - ${messageFiledContainerHeight})`,
    overflowY: 'scroll',
  },
  messagingHeaderContainer: {
    display: 'flex',
    width: '100%',
    height: messageHeaderHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIconButton: {
    color: 'white',
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.8), rgba(0,0,0,1))',
    padding: '10px',
    margin: '5px',
  },
  textMessage: {
    fontSize: '0.8rem',
    color: 'white',
    margin: '12px',
  },
  messageField: {
    width: '80%',
    boxShadow: 'inset 0px 0px 8px 0 rgba(0, 0, 0, 0.15)',
    borderRadius: '18px',
    paddingLeft: '10px',
  },
  messageFieldContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sendButton: {
    margin: '0px 10px 0px 0px',
    color: 'white',
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.8), rgba(0,0,0,1))',
    padding: '10px',
  },
});

export default useStyles;
