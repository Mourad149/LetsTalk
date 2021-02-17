const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  country: "",
  currentPosition: "",
  mail: "",
  connectionSocket: null,
};

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      console.log(action.payload);
      let updatedState = state;
      delete action.payload["password"];
      updatedState = action.payload;
      return updatedState;
      break;
    case "DISCONNECT":
      return state;
      break;
    default:
      return state;
      break;
  }
};
