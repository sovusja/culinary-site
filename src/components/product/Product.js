import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Product.scss";
import { createClient } from "contentful";
import Eggs from "../../img/eggs.png";
import Chocolate from "../../img/chocolate.png";
import Nuts from "../../img/nuts.png";
import Berries from "../../img/berries.png";
import Citrus from "../../img/citrus.png";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const currSku = searchParam.get("sku");

  const client = createClient({
    space: "ifub9n6vnzdy",
    accessToken: "aPZnBoMDfU_t_O0f8CNJh09kvTVM9GMBjC1u3fZK9QA",
  });

  const imgMap = {
    eggs: Eggs,
    chocolate: Chocolate,
    nuts: Nuts,
    berries: Berries,
    citrus: Citrus,
  };

  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        "fields.Sku": currSku,
      })
      .then((response) => {
        setProduct(response?.items[0]?.fields);
      })
      .catch(console.error);
  }, [currSku]);

  const clickPlusHandler = () => {
    setQuantity((prev) => +prev + 1);
  };

  const clickMinusHandler = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => +prev - 1);
  };

  const changeHandler = (e) => {
    setQuantity(e.target.value);
  };

  if (!product) {
    return;
  }

  const allergensArr = product.allergens.split(", ");

  return (
    <div className="product">
      <button
        className="product_back"
        onClick={() => navigate(`/catalog?category=${product.category}`)}
      >
        Back
      </button>
      <h2 className="product__name">{product.name}</h2>
      <div className="product__info">
        <div className="product__info-images">
          <img
            className="product__info-images_img"
            src={product.image.fields.file.url}
          ></img>
        </div>
        <div className="product__info-text">
          <p className="product__info-text-small-text">
            {product.shortDescription}
          </p>
          <div className="product__info-text-allergens">
            {allergensArr.map((elem) => {
              if (!imgMap[elem]) {
                return null;
              }
              return (
                <img
                  className="product__info-text-allergens-icon"
                  src={imgMap[elem]}
                />
              );
            })}
          </div>
          <p className="product__info-text-long-text">{product.description}</p>
          <div className="product__info-text-price">$ {product.price}</div>
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
            <button className="product__info-text_card-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
