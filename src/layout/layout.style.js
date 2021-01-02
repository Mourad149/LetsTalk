import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    position: 'absolute',
    top: '0',
  },
  signupPageContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  waveBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
  },
  letsTalkLogo: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    backgroudColor: 'white',
  },
});

export default useStyles;
