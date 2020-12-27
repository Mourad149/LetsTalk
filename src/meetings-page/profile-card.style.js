import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  profileCard: {
    height: '100%',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  pseudo: {
    fontSize: '1rem',
  },
  meetingsNetwork: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover, &:focus': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  avatar: {
    height: '200px',
    width: '200px',
    margin: 'auto',
    backgroundColor: 'black',
  },
  editBox: {
    border: '1px solid black',
    padding: '7px',
    margin: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    '&:hover, &:focus': {
      backgroundColor: 'rgb(214, 214, 214, 0.2)',
      cursor: 'pointer',
    },
  },
  description: {
    margin: '20px 0px',
    padding: '10px',
    textAlign: 'justify',
  },
  icon: {
    margin: '3px',
  },
});

export default useStyles;
