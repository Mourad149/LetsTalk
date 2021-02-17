const initialState = {
  open: false,
  component: null,
};

export const notifReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRE-NOTIF":
      let updatedState = state;

      updatedState.open = action.payload.open;
      updatedState.component = action.payload.component;
      return updatedState;
      break;

    default:
      return state;
      break;
  }
};
