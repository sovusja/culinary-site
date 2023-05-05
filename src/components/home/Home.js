import React from "react";
import "./Home.scss";
import HeroBanner from "../heroBanner/HeroBanner";
import AboutUsHome from "../aboutUsHome/AboutUsHome";
import MenuGalary from "../menuGalary/MenuGalary";
import Recommendations from "../recommendations/Recommendations";
import HomeBanner from "../../img/bg-bunner-2.jpg";

const Home = () => {
  const homeBanner = {
    backgroundImg: HomeBanner,
    title: "WELCOME",
    text: "Our restaurant offers full-service dinning with breathtaking views seen our indor cvered pati and outdoor sundeck",
  };

  return (
    <div className="home">
      <HeroBanner
        img={homeBanner.backgroundImg}
        title={homeBanner.title}
        text={homeBanner.text}
      />
      <AboutUsHome />
      <Recommendations />
      <MenuGalary />
    </div>
  );
};

export default Home;
