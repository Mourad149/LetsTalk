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
  description: {
    margin: "20px 0px",
    padding: "10px",
    textAlign: "justify",
  },
  icon: {
    margin: "3px",
  },
});

export default useStyles;
