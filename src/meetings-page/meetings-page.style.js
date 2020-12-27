import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  meetingsPage: {
    height: '100%',
    width: '100%',
    background: '#304352' /* fallback for old browsers */,
    background:
      '-webkit-linear-gradient(to left, #ffffff, #d7d2cc)' /* Chrome 10-25, Safari 5.1-6 */,
    background:
      'linear-gradient(to left, #ffffff, #d7d2cc)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  gridItemContainer: {
    height: '100%',
    display: 'flex',
    padding: '10px',
  },
  dividerContainer: {
    padding: '20px 0 20px 5px',
  },
});

export default useStyles;
