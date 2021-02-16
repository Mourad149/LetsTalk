export const fireNotif = (value) => (dispatch) => {
  return dispatch({
    type: 'FIRE-NOTIF',
    payload: value,
  });
};
export const closeNotif = (value) => (dispatch) => {
  return dispatch({
    type: 'CLOSE-NOTIF',
    payload: value,
  });
};
