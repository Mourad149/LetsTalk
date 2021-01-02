import React, { useState } from 'react';

import useStyles from './sign-up.style';
import Category from './category.component';
import SignUpForm from './sign-up-form.component';
import { Typography } from '@material-ui/core';

const SignUpContainer = (props) => {
  const classes = useStyles();

  const [renderState, setRenderState] = useState({ render: 'default' });

  const onCategorySelected = (category) => {
    setRenderState({ render: category });
  };

  let whatToRender = (
    <div className={classes.gridItemContainer}>
      <Typography className={classes.chooseCategoryText} align="left">
        Please choose a role to start the adventure :
      </Typography>
      <Category
        category="participant"
        onSelect={() => onCategorySelected('participant')}
      />
      <Category category="coach" onSelect={() => onCategorySelected('coach')} />
    </div>
  );

  if (renderState.render === 'coach') {
    whatToRender = <SignUpForm userType="coach" />;
  }
  if (renderState.render === 'participant') {
    whatToRender = <SignUpForm userType="participant" />;
  }
  return <div className={classes.container}>{whatToRender}</div>;
};
export default SignUpContainer;
