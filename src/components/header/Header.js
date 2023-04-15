import React from "react";
import "./Header.scss";
import CartIcon from "../../img/pngwing.com.png";
import LogoIcon from "../../img/png-clipart-spaghetti-illustration-pasta-italian-cuisine-spaghetti-with-meatballs-pasta-food-face-thumbnail.png";
import MenuElement from "../menuElement/MenuElement";

const Header = () => {
  const menuHeader = [
    {
      id: 1,
      text: "HOME",
    },
    {
      id: 2,
      text: "ABOUT",
    },
    {
      id: 3,
      text: "TYPOGRAPHY",
    },
    {
      id: 4,
      text: "CONTACTS",
    },
  ];

  return (
    <header className="header">
      <img className="header__logo" src={LogoIcon} alt="LOGO" />
      <nav className="header__menu">
        {menuHeader.map((link) => (
          <MenuElement key={link.id} text={link.text} />
        ))}
      </nav>
      <img className="header__cart" src={CartIcon} alt="CART" />
    </header>
  );
};

export default Header;
