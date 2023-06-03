import { useState, useEffect, useMemo } from "react";
import { createClient } from "contentful";
import { useLocation } from "react-router-dom";
import Category1 from "../img/category1.svg";
import Category2 from "../img/category2.svg";
import Category3 from "../img/category3.svg";
import Eggs from "../img/eggs.png";
import Chocolate from "../img/chocolate.png";
import Nuts from "../img/nuts.png";
import Berries from "../img/berries.png";
import Citrus from "../img/citrus.png";

const useCatalog = () => {
  const client = useMemo(
    () =>
      createClient({
        space: "ifub9n6vnzdy",
        accessToken: "aPZnBoMDfU_t_O0f8CNJh09kvTVM9GMBjC1u3fZK9QA",
      }),
    []
  );

  const location = useLocation();

  const [product, setProduct] = useState([]);
  const [activeCategory, setActiveCategory] = useState("bakary");
  const [activeAllergens, setActiveAllergens] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const filtred = product.filter((item) => {
    return !activeAllergens.some((el) => item.fields.allergens.includes(el));
  });

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

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

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
  }, [activeCategory, client]);

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const currCategory = searchParam.get("category");
    if (currCategory) {
      setActiveCategory(currCategory);
      client
        .getEntries({
          content_type: "product",
          "fields.category": currCategory,
        })
        .then((response) => {
          setProduct(response.items);
        })
        .catch(console.error);
    }
  }, [client, location.search]);

  return {
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
  };
};

export default useCatalog;
