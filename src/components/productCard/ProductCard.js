import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const { name, price, text, image, sku } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { sku, name, price, image, quantity: 1 },
    });
  };
  return (
    <div className="card">
      <div className="card_product">
        <img className="card_product-img" alt="photo" src={image} />
      </div>
      <h3 className="card_name">{name}</h3>
      <p className="card_text">{text}</p>
      <p className="card_price">{price}</p>
      <div className="card_buttons">
        <button className="card_buttons-cart" onClick={clickHandler}>
          ADD TO CART
        </button>
        <button
          className="card_buttons-details"
          onClick={() => navigate(`/product?sku=${sku}`)}
        >
          MORE INFO
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
