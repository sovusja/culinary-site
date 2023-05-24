import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { name, price, text, image, sku } = props;
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card_product">
        <img className="card_product-img" alt="photo" src={image} />
      </div>
      <h3 className="card_name">{name}</h3>
      <p className="card_text">{text}</p>
      <p className="card_price">{price}</p>
      <div className="card_buttons">
        <button className="card_buttons-cart">ADD TO CART</button>
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
