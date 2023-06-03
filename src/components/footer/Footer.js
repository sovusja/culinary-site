import React from "react";
import "./Footer.scss";
import LogoIcon from "../../img/png-clipart-spaghetti-illustration-pasta-italian-cuisine-spaghetti-with-meatballs-pasta-food-face-thumbnail.png";
import InstagramIcon from "../../img/instagram.png";
import LinkedinIcon from "../../img/linkedin.png";
import PinterestIcon from "../../img/pinterest.png";
import TwitterIcon from "../../img/twitter.png";
import WhatsappIcon from "../../img/whatsapp.png";
import YoutubeIcon from "../../img/youtube.png";

const Footer = () => {
  const social = [
    {
      id: 1,
      text: "INSTAGRAM",
      src: InstagramIcon,
      href: "https://www.instagram.com/",
    },
    {
      id: 2,
      text: "LINKEDIN",
      src: LinkedinIcon,
      href: "https://www.linkedin.com/feed/",
    },
    {
      id: 3,
      text: "PINTEREST",
      src: PinterestIcon,
      href: "https://www.pinterest.com/",
    },
    {
      id: 4,
      text: "TWITTER",
      src: TwitterIcon,
      href: "https://twitter.com/",
    },
    {
      id: 5,
      text: "WHATSAPP",
      src: WhatsappIcon,
      href: "https://www.whatsapp.com/",
    },
    {
      id: 6,
      text: "YOUTUBE",
      src: YoutubeIcon,
      href: "https://www.youtube.com/",
    },
  ];

  return (
    <footer className="footer">
      <img className="footer__logo" src={LogoIcon} alt="LOGO" />
      <div className="footer__social-menu">
        {social.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            key={link.id}
            className="social__menu"
          >
            <img className="social__icon" alt={link.text} src={link.src} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
