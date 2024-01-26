const initialState = {
  loading: true,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const addToCartItems = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, action.payload],
    //   };
    //   break;

    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        cartItems: existingItem
          ? state.cartItems
          : [...state.cartItems, action.payload],
      };
      break;

    case "UPDATE_CART":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
      break;
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      break;

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
      break;
    default:
      return state;
  }
};

export default addToCartItems;
