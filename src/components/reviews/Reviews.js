import React from "react";
import "./Reviews.scss";

import useReviews from "../../hooks/useReviews";

const Reviews = () => {
  const { clickHandler, reviewsMenu, activeReview } = useReviews();

  return (
    <div className="review">
      <h2 className="review__title">Testimonials</h2>
      <p className="review__text">{reviewsMenu[activeReview].text}</p>
      <div className="review__button">
        {reviewsMenu.map((link) => (
          <img
            className={`review__button-img ${
              link.id === activeReview ? "review__button-img-active" : ""
            }`}
            key={link.id}
            src={link.img}
            alt="smille"
            onClick={() => clickHandler(link.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
