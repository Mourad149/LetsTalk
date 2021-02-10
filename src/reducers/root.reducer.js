import React from 'react';
import { combineReducers } from 'redux';
import { notifReducer } from './notification.reducer';
import { currentUserReducer } from './current-user.reducer';

export default combineReducers({
  notificationReducer: notifReducer,
  currentUserReducer: currentUserReducer,
});
