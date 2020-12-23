import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
  },
  container: {
    alignSelf: "flex-end",
    boxShadow: "2px 2px 7px rgb(214, 214, 214)",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
  category: {
    fontSize: "25px",
    padding: "30px",
    textDecoration: "none",
    color: "black",
    "&:hover, &:focus": {
      backgroundColor: "rgb(214, 214, 214)",
    },
  },
  input: {
    height: "30px",
    width: "300px",
    margin: "0px 20px",
    padding: "10px",
  },

  inputError: {
    margin: "5px 20px",
    fontSize: "10px",
    color: "red",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  submitBtn: {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: "40px",
    marginTop: "10px",
    fontSize: "15px",
    border: "0px ",
    "&:hover, &:focus": {
      backgroundColor: "grey",
      border: "0px ",
    },
  },
});

export default useStyles;
