import React from "react";
import "./NotFound.scss";
import PhotoOut from "../../img/A-404-Page-Best-Practices-and-Design-Inspiration.jpg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found" src={PhotoOut} alt="404" />
    </div>
  );
};
export default NotFound;
