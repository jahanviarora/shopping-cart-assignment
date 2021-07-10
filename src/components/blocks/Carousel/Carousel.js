import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPrevious = () => {
  
    setActiveIndex(activeIndex == 0 ? data.length - 1 : activeIndex - 1);
  };
  const onNext = () => {
    setActiveIndex(activeIndex === data.length - 1? 0 : activeIndex + 1);
  };

  return (
    <div className="carousel">
      <button type="button" className="prev" onClick={onPrevious}>
        PREV
      </button>
      <img
        className="banner-image"
        src={data[activeIndex].bannerImageUrl}
        alt={data[activeIndex].bannerImageAlt}
        tabIndex={0}
      />
      <div className="banner-dots">
        {data.map((item) => (
          <div
            key={item.id}
            className={
              item.id == data[activeIndex].id
                ? "banner-dot active"
                : "banner-dot"
            }
          />
        ))}
      </div>
      <button type="button" className="next" onClick={onNext} tabIndex={0} onKeyPress={onNext}>
        NEXT
      </button>
    </div>
  );
};

export default Carousel;
