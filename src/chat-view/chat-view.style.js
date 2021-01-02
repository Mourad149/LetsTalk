import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  gridMessagesContainer: {
    width: '100%',
    height: '100%',
  },
  voiceChatGridContainer: {
    height: '100%',
    width: '100%',
    background:
      'linear-gradient(180deg, rgba(2, 62, 138, 0.5), rgba(2, 62, 138, 0.9))',
  },
  chatViewGridContainer: {
    height: '100%',
    backgroundColor: '',
  },
});

export default useStyles;
