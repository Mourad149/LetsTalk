import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const messageMinWidth = '6rem';
const messageMaxWidth = '20rem';
const messageWidth = '18rem';
const messageMinHeight = '2.5rem';
const avatarWidth = '2rem';
const avatarHeight = '2rem';
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
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'end',
  },
});

export default useStyles;
