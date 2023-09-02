import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './Slider.css'
import posimg1 from "../slider/poster1.jpg";
import posimg2 from "../slider/poster2.jpg";
import posimg3 from "../slider/poster3.jpg";
import posimg4 from "../slider/poster4.jpg";
import posimg5 from "../slider/poster5.jpg";
import posimg6 from "../slider/poster6.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        className="slider-carousel"
      >
        <div className="slider-img-1 slide-img">
          <img src={posimg1} alt="" />
        </div>
        <div className="slider-img-2 slide-img">
          <img src={posimg2} alt="" />
        </div>
        <div className="slider-img-3 slide-img">
          <img src={posimg3} alt="" />
        </div>
        <div className="slider-img-4 slide-img">
          <img src={posimg4} alt="" />
        </div>
        <div className="slider-img-5 slide-img">
          <img src={posimg5} alt="" />
        </div>
        <div className="slider-img-6 slide-img">
          <img src={posimg6} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
