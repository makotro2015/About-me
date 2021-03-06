import React from "react";
import { useState, useEffect, Children } from "react";
import { cloneElement } from "react/cjs/react.production.min";
import s from "./Carousel.module.scss";
import arrow from "./../../../../image/Arrow.png";

function Carousel({ children }) {
  const btnLeftRef = React.createRef();
  const btnRightRef = React.createRef();
  let windowCommentsWidth = 108.6;
  if (window.innerWidth < 560) {
    windowCommentsWidth = windowCommentsWidth / 2;
  }
  //   ? (windowCommentsWidth = 108.6)
  //   : (windowCommentsWidth = 51.9);
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
    btnRightRef.current.removeAttribute("disabled");
    setOffset((currentOffset) => {
      const newOffset = currentOffset + windowCommentsWidth;
      if (newOffset === 0) {
        btnLeftRef.current.disabled = "true";
      }
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    btnLeftRef.current.classList.remove("Carousel_firstClick__1ahtd");
    btnLeftRef.current.removeAttribute("disabled");
    setOffset((currentOffset) => {
      const newOffset = currentOffset - windowCommentsWidth;
      let maxOffset = -(windowCommentsWidth * (children.length / 2 - 1));
      if (window.innerWidth < 560) {
        maxOffset = -(windowCommentsWidth * (children.length - 1));
      } 
      if (newOffset === maxOffset) {
        btnRightRef.current.disabled = "true";
      }
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
        <button
          className={s.firstClick}
          ref={btnLeftRef}
          onClick={handleLeftArrowClick}
        >
          <img className={s.left} src={arrow} alt="" />
        </button>
        <button ref={btnRightRef} onClick={handleRightArrowClick}>
          <img className={s.right} src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
