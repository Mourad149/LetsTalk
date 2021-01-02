import React from 'react';
import { combineReducers } from 'redux';
import { notifReducer } from './notification.reducer';
export default combineReducers({
  notificationReducer: notifReducer,
});
