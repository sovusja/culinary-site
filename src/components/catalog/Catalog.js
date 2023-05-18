import React, { useState, useEffect } from "react";
import "./Catalog.scss";
import { createClient } from "contentful";
import ProductCard from "../productCard/ProductCard";
import Category1 from "../../img/category1.svg";
import Category2 from "../../img/category2.svg";
import Category3 from "../../img/category3.svg";

const Catalog = () => {
  const client = createClient({
    space: "ifub9n6vnzdy",
    accessToken: "aPZnBoMDfU_t_O0f8CNJh09kvTVM9GMBjC1u3fZK9QA",
  });

  const [product, setProduct] = useState([]);
  const [activeCategory, setActiveCategory] = useState("bakary");

  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        "fields.category": activeCategory,
      })
      .then((response) => {
        setProduct(response.items);
      })
      .catch(console.error);
  }, [activeCategory]);

  const menuCategory = [
    {
      id: 1,
      name: "bakary",
      image: Category2,
    },
    {
      id: 2,
      name: "sweets",
      image: Category1,
    },
    {
      id: 3,
      name: "drinks",
      image: Category3,
    },
  ];

  const clickHandler = (name) => {
    setActiveCategory(name);
  };

  return (
    <div className="catalog">
      <div className="catalog_filters">
        <div className="catalog_filters-category">
          {menuCategory.map((link) => {
            return (
              <div
                className={`${
                  activeCategory === link.name
                    ? "catalog_filters-category-wraper-active"
                    : "catalog_filters-category-wraper"
                }`}
                onClick={() => clickHandler(link.name)}
                key={link.id}
              >
                <img
                  className="catalog_filters-category-image"
                  alt={link.name}
                  src={link.image}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="catalog_element">
        {product.map((product) => (
          <ProductCard
            key={product.sys.id}
            name={product?.fields?.name}
            price={product?.fields?.price}
            text={product?.fields?.shortDescription}
            image={product?.fields?.image.fields.file.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
