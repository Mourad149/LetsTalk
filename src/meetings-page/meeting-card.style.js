import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  meetingCard: {
    display: "grid",
    gridTemplateColumns: "15fr 7fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    gridTemplateAreas:
      '"themeBox . joinBox" "hostBox . joinBox" "participantBox startBox joinBox"',
    boxShadow: " 1px 1px 5px rgb(214, 214, 214)",
    margin: "5px 20px",
  },
  themeBox: {
    gridArea: "themeBox",
    margin: "0px",
    textAlign: "start",
    padding: "5px",
    fontWeight: "bold",
  },
  hostBox: {
    gridArea: "hostBox",
    margin: "0px",
    textAlign: "start",
    padding: "5px",
    fontSize: "14px",
  },
  participantBox: {
    gridArea: "participantBox",
    margin: "0px",
    textAlign: "start",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
  startBox: {
    gridArea: "startBox",
    margin: "0px",
    textAlign: "end",
    padding: "8px",
    fontSize: "12px",
  },
  joinBox: {
    gridArea: "joinBox",
    background: "black",
    margin: "0px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(-120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
  },
  icon: {
    margin: "2px",
  },
});

export default useStyles;
