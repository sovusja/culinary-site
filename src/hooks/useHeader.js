import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useHeader = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const menuHeader = [
    {
      id: 1,
      text: "HOME",
      link: "/",
    },
    {
      id: 2,
      text: "ABOUT",
      link: "/about",
    },
    {
      id: 3,
      text: "CATALOG",
      link: "/catalog",
    },
  ];

  const quantity = cart.reduce((acc, elem) => {
    return acc + elem.quantity;
  }, 0);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return {
    navigate,
    quantity,
    handleClickOutside,
    isOpen,
    setIsOpen,
    menuHeader,
  };
};

export default useHeader;
