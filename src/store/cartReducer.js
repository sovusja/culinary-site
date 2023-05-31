const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.find((item) => item.sku === action.payload.sku)) {
        const updatedCart = state.cart.map((el) => {
          if (el.sku === action.payload.sku) {
            return { ...el, quantity: el.quantity + action.payload.quantity };
          } else {
            return { ...el };
          }
        });
        return { ...state, cart: updatedCart };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_FROM_CART":
      const filtred = state.cart.filter((el) => el.sku !== action.payload.sku);
      return {
        ...state,
        cart: filtred,
      };
    case "INCRESE_QUANTITY":
      const updatedCartIncrese = state.cart.map((el) => {
        if (el.sku === action.payload.sku) {
          return { ...el, quantity: el.quantity + 1 };
        } else {
          return { ...el };
        }
      });
      return {
        ...state,
        cart: updatedCartIncrese,
      };
    case "DECRESE_QUANTITY":
      const updatedCartDecrese = state.cart.map((el) => {
        if (el.sku === action.payload.sku) {
          return { ...el, quantity: el.quantity - 1 };
        } else {
          return { ...el };
        }
      });
      return {
        ...state,
        cart: updatedCartDecrese,
      };
    default:
      return state;
  }
};

export default cartReducer;
