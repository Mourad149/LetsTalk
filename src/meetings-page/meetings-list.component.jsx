import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "./meetings-list.style";
import MeetingCard from "./meeting-card.component";
import SearchBar from "./meeting-search.component";
import { Typography } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
const MeetingsList = (props) => {
  const classes = useStyles();

  const [meetingsState, setMeetings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/meetings").then((res) => {
      console.log(res.data.meetings);
      setMeetings(res.data.meetings);
    });
  }, []);

  const [searchState, setSearchState] = useState({ searchInput: "" });
  const [filteredMeetings, setFilteredMeetings] = useState([]);

  const onSearchHandler = (event) => {
    setSearchState({ searchInput: event.target.value });
    filterMeetings(event.target.value);
  };

  const filterMeetings = (val) => {
    const filteredMeetings = meetingsState.filter((meeting) =>
      meeting.theme.startsWith(val)
    );
    setFilteredMeetings([...filteredMeetings]);
  };

  let usedState = meetingsState;
  if (searchState.searchInput !== "") {
    usedState = filteredMeetings;
  }

  let meetings = usedState.map((item, index) => {
    return (
      <MeetingCard
        key={index}
        host={item.hostId}
        theme={item.theme}
        participants={item.participants}
        startTimeStamps={item.startTimeStamps}
        index={index + 1}
      />
    );
  });
  if (usedState.length === 0) {
    meetings = (
      <Typography align="center" className={classes.unavailableMeetingsText}>
        Unavailable meeting
      </Typography>
    );
  }

  return (
    <div className={classes.meetingsList}>
      <Typography align="center" className={classes.availableMeetings}>
        Available meetings
      </Typography>
      <SearchBar
        value={searchState.searchInput}
        onChange={(event) => onSearchHandler(event)}
      />
      {meetings}
    </div>
  );
};
export default MeetingsList;
