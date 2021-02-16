const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  country: '',
  currentPosition: '',
  mail: '',
};

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      let updatedState = { ...state };
      delete action.payload['password'];
      updatedState = action.payload;
      return updatedState;
      break;

    default:
      return state;
      break;
  }
};
