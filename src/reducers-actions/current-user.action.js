export const loadCurrentUser = (value) => (dispatch) => {
  return dispatch({
    type: "LOAD_USER",
    payload: value,
  });
};
export const disconnect = (value) => (dispatch) => {
  return dispatch({
    type: "DISCONNECT",
  });
};
