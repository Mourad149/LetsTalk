import React, { useState } from "react";

import useStyles from "./sign-up.style";
import Category from "./category.component";
import SignUpForm from "./sign-up-form.component";

const SignUpContainer = (props) => {
  const classes = useStyles();

  const [renderState, setRenderState] = useState({ render: "default" });

  const onCategorySelected = (category) => {
    setRenderState({ render: category });
  };

  let whatToRender = (
    <div>
      <Category
        category="participant"
        onSelect={() => onCategorySelected("participant")}
      />
      <Category category="coach" onSelect={() => onCategorySelected("coach")} />
    </div>
  );

  if (renderState.render === "coach") {
    whatToRender = <SignUpForm userType="coach" />;
  }
  if (renderState.render === "participant") {
    whatToRender = <SignUpForm userType="participant" />;
  }
  return <div className={classes.container}>{whatToRender}</div>;
};
export default SignUpContainer;
