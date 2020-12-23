import React from "react";

import useStyles from "./sign-up.style";

const CustomInput = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <input
        className={classes.input}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
      <p className={classes.inputError}>{props.error}</p>
    </div>
  );
};
export default CustomInput;
