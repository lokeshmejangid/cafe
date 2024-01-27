const initialState = {
  userId: null,
};

const saveUserId = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_ID":
      return {
        ...state,
        userId: action.payload.userId,
      };
      break;
    default:
      return state;
  }
};

export default saveUserId;