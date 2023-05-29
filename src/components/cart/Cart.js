import React from "react";
import "./Cart.scss";
import CartElement from "../cartElement/CartElement";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-catalog">
        <CartElement />
        <CartElement />
        <CartElement />
      </div>
      <div className="cart-order">
        <p className="cart-order_text">Підсумок</p>
        <div className="cart-order_result">
          <p className="cart-order_result-text">Загальна сума 2</p>
          <p className="cart-order_result-text">Знижка 10%</p>
          <p className="cart-order_result-text">До сплати 6</p>

          <p className="cart-order_result-sum">num</p>
        </div>
        <button className="cart-order_btn">Оформити замовлення</button>
      </div>
    </div>
  );
};

export default Cart;
