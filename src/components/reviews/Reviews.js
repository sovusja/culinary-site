import React, { useEffect, useState, useCallback } from "react";
import "./Reviews.scss";
import Smille1 from "../../img/001.jpg";
import Smille2 from "../../img/002.jpg";
import Smille3 from "../../img/003.jpg";
import Smille4 from "../../img/004.jpg";

const Reviews = () => {
  const reviewsMenu = [
    {
      id: 0,
      text: "Cool goodies of our own production. You can enjoy them and delicious drinks",
      img: Smille1,
    },
    {
      id: 1,
      text: "There is always delicious coffee and desserts made with love...",
      img: Smille2,
    },
    {
      id: 2,
      text: "My friends and I like to enjoy desserts here after a hard day's work.",
      img: Smille3,
    },
    {
      id: 3,
      text: "Pleasant atmosphere and delicious dishes. I often order desserts here for my relatives",
      img: Smille4,
    },
  ];

  const [activeReview, setActiveReview] = useState(0);

  const clickHandler = (id) => {
    setActiveReview(id);
  };

  const slideChange = useCallback(() => {
    if (activeReview === reviewsMenu.length - 1) {
      setActiveReview(0);
    } else {
      setActiveReview((prev) => prev + 1);
    }
  }, [activeReview, reviewsMenu.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      slideChange();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slideChange]);

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
