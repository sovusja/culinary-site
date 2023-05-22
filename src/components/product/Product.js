import React, { useState } from "react";
import "./Product.scss";
import Photo from "../../img/ice-cream.svg";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const clickPlusHandler = () => {
    setQuantity((prev) => +prev + 1);
  };

  const clickMinusHandler = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => +prev - 1);
  };
  console.log(quantity);

  const changeHandler = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="product">
      <h2 className="product__name">назва</h2>
      <div className="product__info">
        <div className="product__info-images">
          <img className="product__info-images_img" src={Photo}></img>
          <div className="product__info-images_slider">слайдер</div>
        </div>
        <div className="product__info-text">
          <div className="product__info-text-price">ціна</div>
          <p className="product__info-text-small-text">короткий опис</p>
          <div className="product__info-text_card">
            <div className="product__info-text_card-click">
              <button className="card-click_minus" onClick={clickMinusHandler}>
                -
              </button>
              <input
                type="number"
                className="card-click_quantity"
                value={quantity}
                onChange={changeHandler}
              ></input>
              <button className="card-click_plus" onClick={clickPlusHandler}>
                +
              </button>
            </div>
            <button className="product__info-text_card-btn">кошик</button>
          </div>
          <p className="product__info-text-long-text">довгий опис</p>
          <div className="product__info-text-allergens">алергени</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
