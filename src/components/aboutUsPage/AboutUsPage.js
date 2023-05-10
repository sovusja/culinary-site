import React from "react";
import "./AboutUsPage.scss";
import AboutBanner from "../../img/breadcrumbs.jpg";
import HeroBanner from "../heroBanner/HeroBanner";
import AboutUsAbout from "../aboutUsAbout/AboutUsAbout";
import Reviews from "../reviews/Reviews";
import Advantages from "../advantages/Advantages";

const AboutUsPage = () => {
  const aboutBanner = {
    backgroundImg: AboutBanner,
    title: "About Us",
    text: "We make your life more delicious",
  };

  return (
    <div className="about-us-page">
      <HeroBanner
        img={aboutBanner.backgroundImg}
        title={aboutBanner.title}
        text={aboutBanner.text}
      />
      <AboutUsAbout />
      <Advantages />
      <Reviews />
    </div>
  );
};

export default AboutUsPage;
