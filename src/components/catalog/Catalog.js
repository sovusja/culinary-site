import React, { useState, useEffect } from "react";
import "./Catalog.scss";
import { createClient } from "contentful";
import ProductCard from "../productCard/ProductCard";
import Category1 from "../../img/category1.svg";
import Category2 from "../../img/category2.svg";
import Category3 from "../../img/category3.svg";
import Eggs from "../../img/eggs.png";
import Chocolate from "../../img/chocolate.png";
import Nuts from "../../img/nuts.png";
import Berries from "../../img/berries.png";
import Citrus from "../../img/citrus.png";
import { useLocation } from "react-router-dom";

const Catalog = () => {
  const client = createClient({
    space: "ifub9n6vnzdy",
    accessToken: "aPZnBoMDfU_t_O0f8CNJh09kvTVM9GMBjC1u3fZK9QA",
  });

  const [product, setProduct] = useState([]);
  const [activeCategory, setActiveCategory] = useState("bakary");
  const [activeAllergens, setActiveAllergens] = useState([]);

  const filtred = product.filter((item) => {
    return !activeAllergens.some((el) => item.fields.allergens.includes(el));
  });

  const location = useLocation();

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

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const currCategory = searchParam.get("category");
    if (currCategory) {
      setActiveCategory(currCategory);
    }

    client
      .getEntries({
        content_type: "product",
        "fields.category": currCategory,
      })
      .then((response) => {
        setProduct(response.items);
      })
      .catch(console.error);
  }, []);

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

  const menuAllergens = [
    {
      id: 1,
      name: "eggs",
      img: Eggs,
    },
    {
      id: 2,
      name: "chocolate",
      img: Chocolate,
    },
    {
      id: 3,
      name: "nuts",
      img: Nuts,
    },
    {
      id: 4,
      name: "berries",
      img: Berries,
    },
    {
      id: 5,
      name: "citrus",
      img: Citrus,
    },
  ];

  const clickHandlerCategory = (name) => {
    setActiveCategory(name);
  };

  const clickHandlerAllergens = (name) => {
    if (!activeAllergens.includes(name)) {
      setActiveAllergens((prev) => [...prev, name]);
    } else {
      const filtred = activeAllergens.filter((elem) => elem !== name);
      setActiveAllergens(filtred);
    }
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
                onClick={() => clickHandlerCategory(link.name)}
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
        <div className="catalog_filters-allergens">
          {menuAllergens.map((link) => {
            return (
              <div
                className={`${
                  activeAllergens.includes(link.name)
                    ? "catalog_filters-allergens-wraper-active"
                    : "catalog_filters-allergens-wraper"
                }`}
                onClick={() => clickHandlerAllergens(link.name)}
                key={link.id}
              >
                <img
                  className="catalog_filters-allergens-image"
                  alt={link.name}
                  src={link.img}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button className="catalog-filters-btn">SHOW FILTERS</button>
      <div className="catalog_element">
        {filtred.map((product) => (
          <ProductCard
            key={product.sys.id}
            name={product?.fields?.name}
            price={product?.fields?.price}
            text={product?.fields?.shortDescription}
            image={product?.fields?.image.fields.file.url}
            sku={product?.fields?.Sku}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
