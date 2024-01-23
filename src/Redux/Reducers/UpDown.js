const initialState = 1;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
      break;
    case 'DECREMENT':
      return state - action.payload;
      break;
    default:
      return initialState;
  }
};

export default changeTheNumber;
