import React from "react";
import "./AboutUsAbout.scss";
import AboutImg from "../../img/about-us-1-518x434.jpg";

const AboutUsAbout = () => {
  return (
    <div className="aboutus">
      <img className="aboutus__img" src={AboutImg} alt="AboutImg" />
      <div className="aboutus__text">
        <h2 className="aboutus__text-title">About Our Restaurant</h2>
        <p className="aboutus__text-title-text">
          - We offer the best Italian dishes in a friendly and calm atmosphere.
        </p>
        <p className="aboutus__text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="aboutus__text-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur.
        </p>
      </div>
    </div>
  );
};

export default AboutUsAbout;
