export const fireNotif = (value) => (dispatch) => {
  return dispatch({
    type: 'FIRE-NOTIF',
    payload: value,
  });
};
