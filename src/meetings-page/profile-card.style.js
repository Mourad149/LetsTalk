import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  profileCard: {
    flex: "1",
    height: "700px",
    boxShadow: " 1px 1px 5px rgb(214, 214, 214)",
    margin: "10px",
  },
  name: {
    fontSize: "20px",
    marginBottom: "0px",
    // textAlign: "start",
    // paddingLeft: "10px",
  },
  pseudo: {
    fontSize: "13px",
    marginTop: "0px",
    // textAlign: "start",
    // paddingLeft: "10px",
  },
  meetingsNetwork: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover, &:focus": {
      textDecoration: "underline",
    },
  },
  avatar: {
    height: "200px",
    width: "200px",
    margin: "auto",
    backgroundColor: "black",
  },
  editBox: {
    border: "1px solid black",
    padding: "7px",
    margin: "10px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    "&:hover, &:focus": {
      backgroundColor: "rgb(214, 214, 214, 0.2)",
    },
  },
  addBox: {
    border: "1px solid black",
    padding: "7px",
    margin: "10px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: "black",
    color: "white",
    "&:hover, &:focus": {
      backgroundColor: "grey",
    },
  },
  description: {
    margin: "20px 0px",
    padding: "10px",
    textAlign: "justify",
  },
  icon: {
    margin: "3px",
  },
  modalMain: {
    position: "fixed",
    background: "white",
    width: "40%",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "20px",
    borderRadius: "24px",
  },

  modalTitle: {
    fontSize: "25px",
  },
  modalClose: {
    position: "absolute",
    margin: "20px",
    fontSize: 30,
    color: "rgba(0,0,0,0.6)",
    top: "0",
    right: "0",
    "&:hover, &:focus": {
      color: "black",
    },
  },
  displayBlock: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "block",
  },

  displayNone: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "none",
  },
});

export default useStyles;
