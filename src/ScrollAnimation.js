import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const ScrollAnimation = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
  return (
    <div className="top">
      <h1 className="text-center">Welcome To React Animation</h1>
      <h1>Fade Animation</h1>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-left"></div>
      <h1>Flip Animation</h1>
      <div className="animation" data-aos="flip-right"></div>
      <h1>Zoom Animation</h1>
      <div className="animation" data-aos="zoom-in"></div>
    </div>
  );
};

export default ScrollAnimation;
