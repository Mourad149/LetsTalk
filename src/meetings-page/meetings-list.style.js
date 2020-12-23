import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  meetingsList: {
    flex: "3",
    height: "700px",
    boxShadow: " 1px 1px 5px rgb(214, 214, 214)",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  searchBar: {
    height: "30px",
    border: "1px solid black",
    paddingLeft: "10px",
    margin: "10px 20px",
  },
});

export default useStyles;
