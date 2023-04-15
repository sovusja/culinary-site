import React from "react";
import "./Header.scss";
import CartIcon from "../../img/pngwing.com.png";
import MenuElement from "../menuElement/MenuElement";

const Header = () => {
  const menu = [
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
    <div className="header">
      <img
        className="header__logo"
        src="https://t4.ftcdn.net/jpg/00/79/53/65/360_F_79536533_d2pTf2eJZMLMvyq7lXpT5DvQl5fe5ktZ.jpg"
        alt="LOGO"
      />
      <div className="header__menu">
        {menu.map((link) => (
          <MenuElement key={link.id} text={link.text} />
        ))}
      </div>
      <img className="header__cart" src={CartIcon} alt="CART" />
    </div>
  );
};

export default Header;
