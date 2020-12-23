import React from "react";

import useStyles from "./sign-up.style";
import SignUpContainer from "./sign-up-container-component";
import Logo from "../assets/sign-up-svg";

const SignUpPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Logo />
      <SignUpContainer />
    </div>
  );
};
export default SignUpPage;
