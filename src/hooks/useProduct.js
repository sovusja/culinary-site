import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createClient } from "contentful";
import Eggs from "../img/eggs.png";
import Chocolate from "../img/chocolate.png";
import Nuts from "../img/nuts.png";
import Berries from "../img/berries.png";
import Citrus from "../img/citrus.png";

const useProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParam = new URLSearchParams(location.search);
  const currSku = searchParam.get("sku");

  const imgMap = {
    eggs: Eggs,
    chocolate: Chocolate,
    nuts: Nuts,
    berries: Berries,
    citrus: Citrus,
  };

  const client = useMemo(
    () =>
      createClient({
        space: "ifub9n6vnzdy",
        accessToken: "aPZnBoMDfU_t_O0f8CNJh09kvTVM9GMBjC1u3fZK9QA",
      }),
    []
  );

  const allergensArr = (product?.allergens || "").split(", ");

  const clickHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        sku: currSku,
        name: product.name,
        price: product.price,
        image: product.image.fields.file.url,
        quantity,
      },
    });
  };

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
  }, [currSku, client]);

  return {
    changeHandler,
    clickMinusHandler,
    clickPlusHandler,
    imgMap,
    clickHandler,
    allergensArr,
    product,
    navigate,
    quantity,
  };
};

export default useProduct;
