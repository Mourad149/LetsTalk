import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homePageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  homePageButton: {
    padding: '30px',
    color: 'black',
    '&:hover': {
      background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8))',
      cursor: 'pointer',
    },
    borderRadius: '24px',
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
    minWidth: '15rem',
    margin: '20px',
  },
  homePageBanner: {
    fontSize: '3rem',
    fontWeight: 600,
    width: '70%',
  },
  buttonText: {
    fontSize: '1.5rem',
    color: 'white',
  },
});

export default useStyles;
