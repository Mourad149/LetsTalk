
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useStyles from './meetings-list.style';
import MeetingCard from './meeting-card.component';
import SearchBar from './meeting-search.component';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import BackdropComponent from '../utils/backdrop.component';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';


const MeetingsList = (props) => {
  const classes = useStyles();

  const [meetings, setMeetings] = useState([]);
  const [usedState, setUsedState] = useState([]);
  const [searchState, setSearchState] = useState({ searchInput: '' });

  const [filteredMeetings, setFilteredMeetings] = useState([]);
  const [skip, setSkip] = useState(0);
  const [meetingsAreLoading, setMeetingsAreLoading] = useState(true);
  const myRef = useRef();
  const { cookies } = props;

  const onSearchHandler = (event) => {
    setSearchState({ searchInput: event.target.value });
    filterMeetingsFunc(event.target.value);
  };

  const filterMeetingsFunc = (val) => {
    setFilteredMeetings(
      usedState.filter((meeting) => meeting.theme.startsWith(val))
    );
  };
  const onScroll = () => {
    const scrollY = window.scrollY;
    const scrollTop = myRef.current.scrollTop;
    const scrollHeight = myRef.current.scrollHeight;
    const offsetHeight = myRef.current.offsetHeight;
    const clientHeight = myRef.current.clientHeight;
    if (scrollHeight - offsetHeight - scrollTop < 1) {
      setSkip(usedState.length);
    }
  };

  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_BASE_URL}:5000/meetings/${skip}`, {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`,
        },
      })
      .then((res) => {
        console.log(res);

        setUsedState((prevState) => [...prevState, ...res.data.meetings]);
        setMeetingsAreLoading(false);

      })
      .catch((err) => console.log(err));
  }, [skip]);
  useEffect(() => {
    if (searchState.searchInput !== '') {
      setUsedState([...filteredMeetings]);
    } else {
      axios
        .get(`https://${process.env.REACT_APP_BASE_URL}:5000/meetings/${0}`, {
          headers: {
            Authorization: `Bearer ${cookies.get('token')}`,
          },
        })
        .then((res) => {
          console.log(res);

          setUsedState((prevState) => [...res.data.meetings]);

        })
        .catch((err) => console.log(err));
    }
  }, [filteredMeetings]);

  useEffect(() => {
    setMeetings(() => {
      if (usedState.length !== 0) {
        return usedState?.map((item, index) => {
          return (
            <MeetingCard
              key={index}
              host={item.hostId}
              theme={item.theme}
              participants={item.participants}
              startTimeStamps={item.startTimeStamps}
              meetingId={item._id}
              currentUserId={props.currentUserReducer._id}
              index={index + 1}
              {...props}

            />
          );
        });
      } else {
        return (
          <Typography
            align="center"
            className={classes.unavailableMeetingsText}
          >
            Unavailable meeting
          </Typography>
        );
      }
    });
  }, [usedState]);


  return (
    <div className={classes.meetingsList} onScroll={onScroll} ref={myRef}>
      <Typography align="center" className={classes.availableMeetings}>
        Available meetings
      </Typography>
      <SearchBar
        value={searchState.searchInput}
        onChange={(event) => onSearchHandler(event)}
      />
      {!meetingsAreLoading ? (
        meetings
      ) : (
        <div className={classes.circularContainer}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUserReducer: state.currentUserReducer,
  };
};
export default connect(mapStateToProps)(MeetingsList);

