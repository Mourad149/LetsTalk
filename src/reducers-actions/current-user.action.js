export const loadCurrentUser = (value) => (dispatch) => {
  return dispatch({
    type: 'LOAD_USER',
    payload: value,
  });
};
