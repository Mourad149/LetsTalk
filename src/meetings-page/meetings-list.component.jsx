import React, { useState, useEffect } from "react";
import axios from "axios";

import useStyles from "./meetings-list.style";
import MeetingCard from "./meeting-card.component";
import SearchBar from "./meeting-search.component";

const MeetingsList = (props) => {
  const classes = useStyles();

  const [meetingsState, setMeetings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/meetings").then((response) => {
      setMeetings(response.data.meetings);
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

  let meetings = usedState.map((meeting) => (
    <MeetingCard
      key={meeting._id}
      theme={meeting.theme}
      host={meeting.hostId}
      participants={meeting.participants}
      startTimeStamps={meeting.startTimeStamps}
    />
  ));
  if (usedState.length === 0) {
    meetings = <h1 style={{ textAlign: "center" }}>Unavailable meeting</h1>;
  }

  return (
    <div className={classes.meetingsList}>
      <h5 style={{ textAlign: "center" }}>Available meetings</h5>
      <SearchBar
        value={searchState.searchInput}
        onChange={(event) => onSearchHandler(event)}
      />
      {meetings}
    </div>
  );
};
export default MeetingsList;
