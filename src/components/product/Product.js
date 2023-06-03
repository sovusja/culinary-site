import React from "react";
import "./Product.scss";
import useProduct from "../../hooks/useProduct";

const Product = () => {
  const {
    changeHandler,
    clickMinusHandler,
    clickPlusHandler,
    imgMap,
    clickHandler,
    allergensArr,
    product,
    navigate,
    quantity,
  } = useProduct();

  if (!product) {
    return;
  }

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
            alt="Product"
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
                  key={elem}
                  className="product__info-text-allergens-icon"
                  src={imgMap[elem]}
                  alt="Allergen"
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
            <button
              onClick={clickHandler}
              className="product__info-text_card-btn"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
