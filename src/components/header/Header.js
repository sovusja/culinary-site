import React, { useState } from "react";
import "./Header.scss";
import CartIcon from "../../img/pngwing.com.png";
import PopupIcon from "../../img/svgviewer-output.svg";
import LogoIcon from "../../img/png-clipart-spaghetti-illustration-pasta-italian-cuisine-spaghetti-with-meatballs-pasta-food-face-thumbnail.png";
import MenuElement from "../menuElement/MenuElement";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const navigate = useNavigate();
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const quantity = cart.reduce((acc, elem) => {
    return acc + elem.quantity;
  }, 0);

  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          onClick={() => navigate("/")}
          src={LogoIcon}
          alt="LOGO"
        />
        <nav className="header__menu">
          {menuHeader.map((link) => (
            <MenuElement key={link.id} link={link.link} text={link.text} />
          ))}
        </nav>
        <div className="header__icons">
          <img
            className="header__icons-popup-btn"
            src={PopupIcon}
            alt="POPUP"
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <div className="header__icons-cart">
            {quantity > 0 && (
              <div className="header__icons-cart-counter">{quantity}</div>
            )}
            <img
              className="header__icons-cart-icon"
              src={CartIcon}
              alt="CART"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      </header>

      {isOpen && (
        <div onClick={handleClickOutside} className="popup">
          <div className="popup-content">
            <nav className="popup-content-menu">
              {menuHeader.map((link) => {
                return (
                  <a className="popup-content-menu-elem" href={link.link}>
                    {link.text}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
