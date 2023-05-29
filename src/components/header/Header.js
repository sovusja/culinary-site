import React from "react";
import "./Header.scss";
import CartIcon from "../../img/pngwing.com.png";
import LogoIcon from "../../img/png-clipart-spaghetti-illustration-pasta-italian-cuisine-spaghetti-with-meatballs-pasta-food-face-thumbnail.png";
import MenuElement from "../menuElement/MenuElement";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
    {
      id: 4,
      text: "CONTACTS",
    },
  ];

  return (
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
      <img
        className="header__cart"
        src={CartIcon}
        alt="CART"
        onClick={() => navigate("/cart")}
      />
    </header>
  );
};

export default Header;
