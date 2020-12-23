import React, { useState } from "react";

import useStyles from "./meetings-list.style";
import MeetingCard from "./meeting-card.component";
import SearchBar from "./meeting-search.component";

const MeetingsList = (props) => {
  const classes = useStyles();

  const [meetingsState, setMeetings] = useState([
    {
      id: 1,
      theme: "Depression",
      host: "Zakaria",
      participants: "20",
      startTime: "10 PM",
      startDate: "Feb 27",
    },
    {
      id: 2,
      theme: "Drugs addiction",
      host: "Morad",
      participants: "5",
      startTime: "11 PM",
      startDate: "Feb 27",
    },
    {
      id: 3,
      theme: "Alcoholism",
      host: "Saad",
      participants: "8",
      startTime: "9 PM",
      startDate: "Feb 27",
    },
  ]);

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
      key={meeting.id}
      theme={meeting.theme}
      host={meeting.host}
      participants={meeting.participants}
      startTime={meeting.startTime}
      startDate={meeting.startDate}
    />
  ));
  if (usedState.length === 0) {
    meetings = <h1>Not Available</h1>;
  }

  return (
    <div className={classes.meetingsList}>
      <h5>Available meetings</h5>
      <SearchBar
        value={searchState.searchInput}
        onChange={(event) => onSearchHandler(event)}
      />
      {meetings}
    </div>
  );
};
export default MeetingsList;
