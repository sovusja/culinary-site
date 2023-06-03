import React from "react";
import "./Catalog.scss";
import ProductCard from "../productCard/ProductCard";
import useCatalog from "../../hooks/useCatalog";

const Catalog = () => {
  const {
    filtred,
    clickHandlerCategory,
    clickHandlerAllergens,
    handleClickOutside,
    menuCategory,
    menuAllergens,
    isOpen,
    setIsOpen,
    activeAllergens,
    activeCategory,
  } = useCatalog();

  return (
    <>
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
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="catalog-filters-btn"
        >
          SHOW FILTERS
        </button>
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

      {isOpen && (
        <div onClick={handleClickOutside} className="popup__filter">
          <div className="popup__filter-content">
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
        </div>
      )}
    </>
  );
};

export default Catalog;
