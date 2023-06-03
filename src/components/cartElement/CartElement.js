import React from "react";
import "./CartElement.scss";
import Delete from "../../img/delete.png";
import useCart from "../../hooks/useCart";

const CartElement = (props) => {
  const { image, name, price, quantity, sku } = props;

  const { deleteHandler, increseHandler, decreseHandler } = useCart({ sku });

  return (
    <div className="cart-elem">
      <img className="cart-elem__image" src={image} alt="Product" />
      <div className="cart-elem__info">
        <h2 className="cart-elem__info-name">{name}</h2>
        <p className="cart-elem__info-price">${price}</p>
        <div className="cart-elem__info-click">
          <button
            disabled={quantity <= 1}
            className="cart-elem__info-click_minus"
            onClick={decreseHandler}
          >
            -
          </button>
          <input
            type="number"
            className="cart-elem__info-click_quantity"
            value={quantity}
            readOnly
          />
          <button
            onClick={increseHandler}
            className="cart-elem__info-click_plus"
          >
            +
          </button>
        </div>
      </div>
      <p className="cart-elem__sum">${price * quantity}</p>
      <button className="cart-elem__delete" onClick={deleteHandler}>
        <img className="cart-elem__delete-image" src={Delete} alt="Delete" />
      </button>
    </div>
  );
};

export default CartElement;
