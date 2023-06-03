import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useCart = (props) => {
  const { sku } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const subTotal = cart.reduce((acc, elem) => {
    return acc + elem.price * elem.quantity;
  }, 0);

  const total = (subTotal * 0.9).toFixed(2);

  const deleteHandler = () => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: { sku },
    });
  };
  const increseHandler = () => {
    dispatch({
      type: "INCRESE_QUANTITY",
      payload: { sku },
    });
  };
  const decreseHandler = () => {
    dispatch({
      type: "DECRESE_QUANTITY",
      payload: { sku },
    });
  };

  return {
    cart,
    subTotal,
    total,
    deleteHandler,
    increseHandler,
    decreseHandler,
  };
};

export default useCart;
