import React from "react";
import "./Footer.scss";
import MenuElement from "../menuElement/MenuElement";
import LogoIcon from "../../img/png-clipart-spaghetti-illustration-pasta-italian-cuisine-spaghetti-with-meatballs-pasta-food-face-thumbnail.png";
import InstagramIcon from "../../img/instagram.png";
import LinkedinIcon from "../../img/linkedin.png";
import PinterestIcon from "../../img/pinterest.png";
import TwitterIcon from "../../img/twitter.png";
import WhatsappIcon from "../../img/whatsapp.png";
import YoutubeIcon from "../../img/youtube.png";

const Footer = () => {
  const menuFooter = [
    {
      id: 1,
      text: "MENU",
    },
    {
      id: 2,
      text: "BLOG",
    },
    {
      id: 3,
      text: "CONTACTS",
    },
    {
      id: 4,
      text: "GALLERY",
    },
    {
      id: 5,
      text: "ABOUT",
    },
  ];

  const social = [
    {
      id: 1,
      text: "INSTAGRAM",
      src: InstagramIcon,
    },
    {
      id: 2,
      text: "LINKEDIN",
      src: LinkedinIcon,
    },
    {
      id: 3,
      text: "PINTEREST",
      src: PinterestIcon,
    },
    {
      id: 4,
      text: "TWITTER",
      src: TwitterIcon,
    },
    {
      id: 5,
      text: "WHATSAPP",
      src: WhatsappIcon,
    },
    {
      id: 6,
      text: "YOUTUBE",
      src: YoutubeIcon,
    },
  ];

  return (
    <footer className="footer">
      <img className="footer__logo" src={LogoIcon} alt="LOGO" />
      <nav className="footer__menu">
        {menuFooter.map((link) => (
          <MenuElement key={link.id} text={link.text} />
        ))}
      </nav>
      <div className="footer__social-menu">
        {social.map((link) => (
          <div className="social__menu">
            <img
              className="social__icon"
              key={link.id}
              alt={link.text}
              src={link.src}
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
