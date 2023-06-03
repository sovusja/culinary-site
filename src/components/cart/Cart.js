import React from "react";
import "./Cart.scss";
import CartElement from "../cartElement/CartElement";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  const subTotal = cart.reduce((acc, elem) => {
    return acc + elem.price * elem.quantity;
  }, 0);

  const total = subTotal * 0.9;

  return (
    <div className="cart">
      <div className="cart-catalog">
        {!cart.length && <h1>There is no items in the cart</h1>}
        {cart.map((elem) => (
          <CartElement
            key={elem.sku}
            image={elem.image}
            price={elem.price}
            quantity={elem.quantity}
            name={elem.name}
            sku={elem.sku}
          />
        ))}
      </div>
      <div className="cart-order">
        <p className="cart-order_text">SUMMARIES</p>
        <div className="cart-order_result">
          <p className="cart-order_result-text">Subtotal ${subTotal}</p>
          <p className="cart-order_result-text">Discount 10%</p>
          <p className="cart-order_result-text">Total ${total}</p>
        </div>
        <button className="cart-order_btn">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
