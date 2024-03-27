"use client";
import React, { useEffect, useRef, useState, TouchEventHandler } from "react";
import ArrowIcon from "@/components/ui/icons/ArrowIcon";
import styles from "@/styles/scss/Carousel.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function Carousel({ children }: Props) {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const offset = -(index + 1) * (100 / 3);

    if (carouselRef.current == null) return;
    carouselRef.current!.style.transform = `translateX(${offset}%)`;
    carouselRef.current!.style.transition = "transform 0.5s ease-in-out";

    const adjustIndexForLoop = () => {
      if (index === -1) {
        setIndex(childrenArray.length - 1);
      } else if (index === childrenArray.length) {
        setIndex(0);
      }
    };

    adjustIndexForLoop();
  }, [index, childrenArray.length]);

  const handleSwipe = (direction: number) => {
    let newIndex = index + direction;

    if (newIndex < 0) {
      newIndex = childrenArray.length - 1;
    } else if (newIndex >= childrenArray.length) {
      newIndex = 0;
    }

    setIndex(newIndex);
  };

  const handleTouch = (() => {
    let startX: number;

    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
      const endX = e.changedTouches[0].clientX;
      const direction = startX > endX ? 1 : -1;
      handleSwipe(direction);
    };

    return { handleTouchStart, handleTouchEnd };
  })();

  return (
    <div className={styles.container}>
      <div
        className={styles.carouselWrapper}
        onTouchStart={handleTouch.handleTouchStart}
        onTouchEnd={handleTouch.handleTouchEnd}
      >
        <button
          type="button"
          className={styles.swipeLeft}
          onClick={() => handleSwipe(-1)}
        >
          <ArrowIcon />
        </button>
        <button
          type="button"
          className={styles.swipeRight}
          onClick={() => handleSwipe(1)}
        >
          <ArrowIcon />
        </button>
        <ul className={styles.carousel} ref={carouselRef}>
          {children}
        </ul>
      </div>
    </div>
  );
}

// https://velog.io/@jujusnake/JULABO-React.js%EB%A1%9C-Infinite-Carousel-%EA%B5%AC%ED%98%84-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AF%B8%EC%82%AC%EC%9A%A9
// https://doooodle932.tistory.com/130
