const initialState = {
  open: false,
};

export const notifReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIRE-NOTIF':
      console.log(action.payload);
      return state;
      break;

    default:
      return state;
      break;
  }
};
