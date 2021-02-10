const initialState = {
  open: false,
  component: null,
};

export const notifReducer = (state = initialState, action) => {
  let updatedState = { ...state };

  switch (action.type) {
    case 'FIRE-NOTIF':
      updatedState.open = action.payload.open;
      updatedState.component = action.payload.component;
      return { ...updatedState };
      break;
    case 'CLOSE-NOTIF':
      updatedState.open = action.payload.open;
      return { ...updatedState };
      break;

    default:
      return state;
      break;
  }
};
