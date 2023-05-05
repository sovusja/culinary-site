import React from "react";
import "./AboutUsPage.scss";
import AboutBanner from "../../img/breadcrumbs.jpg";
import HeroBanner from "../heroBanner/HeroBanner";
import AboutUsAbout from "../aboutUsAbout/AboutUsAbout";
import Reviews from "../reviews/Reviews";

const AboutUsPage = () => {
  const aboutBanner = {
    backgroundImg: AboutBanner,
    title: "About Us",
    text: "We make your life more delicious",
  };

  return (
    <div>
      <HeroBanner
        img={aboutBanner.backgroundImg}
        title={aboutBanner.title}
        text={aboutBanner.text}
      />
      <AboutUsAbout />
      <Reviews />
    </div>
  );
};

export default AboutUsPage;
