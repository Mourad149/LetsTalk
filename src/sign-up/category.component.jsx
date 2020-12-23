import React from "react";

import useStyles from "./sign-up.style";

const Category = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.category} onClick={props.onSelect}>
      I'm a {props.category}
    </div>
  );
};
export default Category;
