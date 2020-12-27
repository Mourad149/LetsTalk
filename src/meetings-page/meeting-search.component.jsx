import React, { useState } from 'react';

import useStyles from './meetings-list.style';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.searchBarContainer}>
      <SearchIcon />
      <TextField
        className={classes.searchBar}
        placeholder="Search by theme"
        value={props.value}
        onChange={props.onChange}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
};
export default SearchBar;
