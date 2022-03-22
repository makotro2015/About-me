import React from "react";
import { useState, useEffect, Children } from "react";
import { cloneElement } from "react/cjs/react.production.min";
import s from "./Carousel.module.scss";

function Carousel({ children }) {
  debugger;
  const windowCommentsWidth = 108.6;
  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "45rem",
            maxWidth: "45rem",
          },
        });
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + windowCommentsWidth;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - windowCommentsWidth;
      const maxOffset = -(windowCommentsWidth * (children.length / 2 - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className={s.mainContainer}>
      <div className={s.window}>
        <div
          className={s.allCommentsContainer}
          style={{
            transform: `translateX(${offset}rem)`,
          }}
        >
          {children}
        </div>
      </div>
      <div className={s.btnsToggle}>
        <button onClick={handleLeftArrowClick}>Лево</button>
        <button onClick={handleRightArrowClick}>Право</button>
      </div>
    </div>
  );
}

export default Carousel;
