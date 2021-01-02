import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  meetingsPage: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  gridItemContainer: {
    height: '100%',
    display: 'flex',
    padding: '10px',
    width: '100%',
  },
  dividerContainer: {
    padding: "20px 0 20px 5px",
  },
  displayBlock: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'block',
  },

  displayNone: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'none',
  },
});

export default useStyles;
