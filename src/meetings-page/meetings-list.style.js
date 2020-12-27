import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  meetingsList: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  searchBar: {
    height: '2rem',
    paddingLeft: '10px',
    margin: '10px 20px',
    borderRadius: '5px',
    width: '80%',
  },
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  unavailableMeetingsText: {
    fontSize: '3rem',
    fontWeight: 600,
  },
  availableMeetings: {
    fontSize: '2.5rem',
    padding: '10px',
  },
});

export default useStyles;
