import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useStyles from './meetings-list.style';
import MeetingCard from './meeting-card.component';
import SearchBar from './meeting-search.component';
import { Typography } from '@material-ui/core';

const MeetingsList = (props) => {
  const classes = useStyles();

  const [meetingsState, setMeetings] = useState([]);

  useEffect(() => {
    setMeetings([
      {
        host: 'Azziz Zakaria',
        theme: 'Depression',
        startTime: '2020',
      },
      {
        host: 'Azziz Zakaria',
        theme: 'Depression',
        startTime: '2020',
      },
      {
        host: 'Azziz Zakaria',
        theme: 'Depression',
        startTime: '2020',
      },
    ]);
  }, []);

  const [searchState, setSearchState] = useState({ searchInput: '' });
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
  if (searchState.searchInput !== '') {
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
