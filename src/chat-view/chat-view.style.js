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
    background: '#232526' /* fallback for old browsers */,
    background:
      '-webkit-linear-gradient(to bottom, #232526, #414345)' /* Chrome 10-25, Safari 5.1-6 */,
    background:
      'linear-gradient(to bottom, #232526, #414345)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
});

export default useStyles;
