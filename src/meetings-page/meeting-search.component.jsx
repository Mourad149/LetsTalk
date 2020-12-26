import React, { useState } from "react";

import useStyles from "./meetings-list.style";

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <input
      className={classes.searchBar}
      placeholder="Search by theme"
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};
export default SearchBar;
