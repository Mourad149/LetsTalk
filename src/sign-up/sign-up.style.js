import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    position: 'absolute',
    top: '0',
  },
  waveBackground: {
    position: 'absolute',
  },
  container: {
    height: '100%',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden',
    padding: '20% 10px 0 10px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  category: {
    padding: '30px',
    color: 'black',
    '&:hover': {
      background:
        'linear-gradient(-45deg, rgba(2, 62, 138, 1), rgba(2, 62, 138, 1))',
      cursor: 'pointer',
    },
    borderRadius: '24px',
    background:
      'linear-gradient(-45deg, rgba(2, 62, 138, 0.8), rgba(2, 62, 138, 0.9))',
    margin: '20px',
    minWidth: '15rem',
  },
  input: {
    height: '30px',
    width: '95%',
    margin: '0px 0px 10px 0px',
    padding: '10px',
    borderRadius: '24px',
    '&:hover, &:focus': {
      boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.2)',
    },
  },
  inputError: {
    margin: '5px 20px',
    fontSize: '1rem',
    color: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  submitBtn: {
    color: 'black',
    '&:hover': {
      background:
        'linear-gradient(-45deg, rgba(2, 62, 138, 1), rgba(2, 62, 138, 1))',
    },
    borderRadius: '24px',
    background:
      'linear-gradient(-45deg, rgba(2, 62, 138, 0.8), rgba(2, 62, 138, 0.9))',

    width: '100%',
    height: '3rem',
    textTransform: 'none',
  },
  categoryText: {
    fontSize: '2rem',
    color: 'white',
  },
  gridItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    overflowX: 'hidden',

  },
  bannerText: {
    fontSize: '3rem',
    fontWeight: 600,
    marginTop: '30px',
  },
  chooseCategoryText: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '30px',
  },
  formBanner: {
    fontSize: '2rem',
  },
  submitButtonText: {
    color: 'white',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
});

export default useStyles;
