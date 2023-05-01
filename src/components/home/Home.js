import React from "react";
import "./Home.scss";
import HeroBanner from "../heroBanner/HeroBanner";
import AboutUs from "../aboutUs/AboutUs";
import MenuGalary from "../menuGalary/MenuGalary";
import Recommendations from "../recommendations/Recommendations";

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <AboutUs />
      <Recommendations />
      <MenuGalary />
    </div>
  );
};

export default Home;
