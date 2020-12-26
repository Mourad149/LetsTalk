import React from 'react';

import useStyles from './sign-up.style';
import { TextField, Typography } from '@material-ui/core';

const CustomInput = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <TextField
        className={classes.input}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        margin="dense"
        InputProps={{ disableUnderline: true }}
      />
      <Typography className={classes.inputError}>{props.error}</Typography>
    </div>
  );
};
export default CustomInput;
