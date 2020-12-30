import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homePageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  primaryButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  homePageButton: {
    padding: '30px',
    color: 'black',
    '&:hover': {
      background:
        'linear-gradient(45deg, rgba(2, 62, 138,1), rgba(2, 62, 138,1))',
      cursor: 'pointer',
    },
    borderRadius: '24px',
    background:
      'linear-gradient(-45deg, rgba(2, 62, 138, 0.8), rgba(2, 62, 138, 0.9))',
    minWidth: '15rem',
    margin: '20px',
  },
  joinAnonymButton: {
    padding: '30px',
    color: 'black',
    '&:hover': {
      boxShadow: '0 0 4px 4px rgba(0,0,0,0.2)',
      cursor: 'pointer',
    },
    borderRadius: '24px',
    background:
      'linear-gradient(-90deg, rgba(2, 62, 138, 0.2), rgba(2, 62, 138, 0.9))',

    minWidth: '15rem',
    maxWidth: '100%',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  anonymButtonText: {
    fontSize: '1.5rem',
    color: 'black',
    fontWeight: 600,
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
