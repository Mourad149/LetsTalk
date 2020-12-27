import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  meetingCard: {
    display: 'grid',
    gridTemplateColumns: '15fr 7fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateAreas:
      '"themeBox . joinBox" "hostBox . joinBox" "participantBox startBox joinBox"',
    margin: '5px 20px',
    '&:hover, &:focus': {
      boxShadow: ' 1px 1px 5px grey',
    },
    borderRadius: '24px',
    background: 'linear-gradient(-45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
    padding: '10px',
  },
  themeBox: {
    gridArea: 'themeBox',
    margin: '0px',
    textAlign: 'start',
    padding: '5px',
    fontWeight: 'bold',
    color: 'white',
  },
  hostBox: {
    gridArea: 'hostBox',
    color: 'white',

    margin: '0px',
    textAlign: 'start',
    padding: '5px',
    fontSize: '14px',
  },
  participantBox: {
    gridArea: 'participantBox',
    margin: '0px',
    textAlign: 'start',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: 'white',
  },
  startBox: {
    gridArea: 'startBox',
    margin: '0px',
    textAlign: 'end',
    padding: '8px',
    fontSize: '12px',
    color: 'white',
  },
  joinBox: {
    gridArea: 'joinBox',
    margin: '0px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover, &:focus': {
      backgroundColor: 'grey',
    },
    borderLeft: '1px solid white',
  },
  icon: {
    margin: '2px',
  },
});

export default useStyles;
