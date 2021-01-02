import React from 'react';

import useStyles from './sign-up.style';
import { Typography } from '@material-ui/core';

const Category = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.category} onClick={props.onSelect}>
      <Typography className={classes.categoryText} align="center">
        I'm a {props.category}
      </Typography>
    </div>
  );
};
export default Category;
