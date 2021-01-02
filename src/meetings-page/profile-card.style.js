import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  profileCard: {
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
  },
  anonymProfileCard: {
    height: '50%',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    height: '15rem',
    width: '15rem',
    margin: 'auto',
    backgroundColor: 'black',
  },
  anonymousLogoContainer: {
    height: '15rem',
    width: '15rem',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
    boxShadow: '0 0 4px 2px rgba(0,0,0,0.1)',
    margin: 'auto',
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
    width: '90%',
  },
  addBox: {
    padding: '7px',
    margin: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
    color: 'white',
    '&:hover, &:focus': {
      backgroundColor: 'rgb(214, 214, 214, 0.2)',
      cursor: 'pointer',
    },
    width: '90%',
  },
  description: {
    margin: '20px 0px',
    padding: '10px',
    textAlign: 'justify',
  },
  icon: {
    margin: '3px',
  },
  modalMain: {
    position: 'fixed',
    background: 'white',
    width: '40%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '20px',
    borderRadius: '24px',
  },

  modalTitle: {
    fontSize: '25px',
  },
  modalClose: {
    position: 'absolute',
    margin: '20px',
    fontSize: 30,
    color: 'rgba(0,0,0,0.6)',
    top: '0',
    right: '0',
    '&:hover, &:focus': {
      color: 'black',
    },
  },
});

export default useStyles;
