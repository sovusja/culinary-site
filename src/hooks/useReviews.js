import { useEffect, useState, useCallback } from "react";
import Smille1 from "../img/001.jpg";
import Smille2 from "../img/002.jpg";
import Smille3 from "../img/003.jpg";
import Smille4 from "../img/004.jpg";

const useReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

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

  return { clickHandler, reviewsMenu, activeReview };
};

export default useReviews;
