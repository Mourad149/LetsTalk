import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const organizerAvatarWidth = '5rem';
const organizerAvatarHeight = '5rem';
const participantAvatarWidth = '2.3rem';
const participantAvatarHeight = '2.3rem';
const useStyles = makeStyles({
  voiceChatContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  voiceOptionsContainer: {
    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceChatOptionsDiv: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  options: {
    margin: '0 3rem 0 3rem',
  },
  endCallIcon: {
    color: 'white',
    backgroundColor: 'red',
    padding: '1rem',
  },
  handIcon: {
    backgroundColor: 'white',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)',
  },
  micIcon: {
    backgroundColor: 'white',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)',
  },
  list: {
    position: 'relative',
  },
  listItem: {
    listStyle: 'none',

    position: 'absolute',
    top: `50%`,
    left: `50%`,
  },
  organizerAvatar: {
    width: organizerAvatarWidth,
    height: organizerAvatarHeight,
    marginLeft: participantAvatarWidth,
    marginRight: participantAvatarWidth,
    marginTop: participantAvatarHeight,
  },
  participantsAvatar: {
    width: participantAvatarWidth,
    height: participantAvatarHeight,
  },


  toastBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  toastIcon: {
    color: '#023e8a',
  },
});

export default useStyles;
