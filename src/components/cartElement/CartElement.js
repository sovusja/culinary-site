import React from "react";
import "./CartElement.scss";
import Photo from "../../img/citrus.png";
import Delete from "../../img/delete.png";

const CartElement = () => {
  return (
    <div className="cart-elem">
      <img className="cart-elem__image" src={Photo} />
      <div className="cart-elem__info">
        <h2 className="cart-elem__info-name">Назва товару</h2>
        <p className="cart-elem__info-price">$ 2</p>
        <div className="cart-elem__info-click">
          <button className="cart-elem__info-click_minus">-</button>
          <input
            type="number"
            className="cart-elem__info-click_quantity"
          ></input>
          <button className="cart-elem__info-click_plus">+</button>
        </div>
      </div>
      <p className="cart-elem__info-sum">$ 5</p>
      <button className="cart-elem__delete">
        <img className="cart-elem__delete-image" src={Delete} />
      </button>
    </div>
  );
};

export default CartElement;
