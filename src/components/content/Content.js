import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./Content.css";
import content from "./content-1.webp";
import content4 from "./iphone-wonderfull-2.png";
import Aos from "aos";
import assetipad from "../assets/ipad-pro.png";
import assetiphone from "../assets/iphone-pro-beyond.jpg";
import assetvision from "../assets/apple-vision.jpg";
import assetwatch from "../assets/watch-pro.png";
import assettrade from "../assets/iphone-trade.webp";
import assetcard from "../assets/apple-card.jpg";
import "aos/dist/aos.css";
import videoSource from "./content-video-2.mp4";
import { motion, useScroll } from "framer-motion";
import posimg1 from "../slider/poster1.jpg";
import posimg2 from "../slider/poster2.jpg";
import posimg3 from "../slider/poster3.jpg";
import posimg4 from "../slider/poster4.jpg";
import posimg5 from "../slider/poster5.jpg";
import posimg6 from "../slider/poster6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Content = () => {
  // Createing a ref using useRef
  const myref = useRef(null);

  // Useing the ref in the useScroll hook
  const { scrollYProgress } = useScroll({
    ref: myref, // Updated this line
    offset: ["0 1", "1.33 1"],
  });

  const [vidAutoplay, setVidAutoplay] = useState(false);

  const handelAutoplay = () => {
    setVidAutoplay(true);
  };

  useEffect(() => {
    Aos.init({ duration: 500, once: true, mirror: true, easing: "ease" });
  }, []);

  return (
    <div className="parent-container">
      <div // ref={myref}// style={{//   scale: scrollYProgress, //   opacity: scrollYProgress,}}
        className="content"
      >
        <div className="content-wrapper">
          <h1 data-aos="fade-down">
            Save on Mac or iPad <br />
            for College
          </h1>
          <h4 data-aos="fade-down">Plus get a gift card up to $150.</h4>
          <h3 data-aos="fade-down">
            <a href="#">Shop Now. </a>
          </h3>
          <div data-aos="zoom-in" className="div-img">
            <img className="content-img-1" src={content} alt="" />
          </div>
        </div>
        <motion.div
          ref={myref}
          // style={{
          //   scale: scrollYProgress,
          //   opacity: 1,
          // }}
          className="video-section"
        >
          <div className="mackbook-air-text">
            <h1>MacBook Air 15"</h1>

            <h4>Impressively big. Impossibly thin.</h4>
            <h6>
              <a href="#">Lern More</a>
              <a href="#">Buy</a>
            </h6>
          </div>

          {!vidAutoplay ? (
            <div className="cont-video-width">
              <video
                src={videoSource}
                onFocus={handelAutoplay}
                className="video-width"
                muted
                loop
                autoPlay
              ></video>
            </div>
          ) : (
            <div className="cont-video-width">
              <video
                src={videoSource}
                className="video-width"
                muted
                loop
              ></video>
            </div>
          )}
        </motion.div>
        <div className="iphone-section">
          <h1>iPhone 14</h1>
          <h4>Wonderfull.</h4>
          <h6>
            <a href="#">Lern More</a>
            <a href="#">Buy</a>
          </h6>
          <img src={content4} alt="" />
        </div>

        {/*grid section */}
        <div
          className="flex-section"
          // ref={myref}
          //   style={{
          //     scale: scrollYProgress,
          //     opacity: 1,
          //     border: '2px solid black'
          //   }}
        >
          <div className="flex-row-1 ">
            <div className="iphone-grid grid-img">
              <h1>iPhone 14 Pro</h1>
              <h5>Pro. Beyond.</h5>
              <h6>
                <a href="#">Lern More</a>
                <a href="#">Buy</a>
              </h6>
              <img src={assetiphone} alt="" />
            </div>

            <div className="mac-grid grid-img">
              <h1>iPad Pro</h1>
              <h5>Supercharged</h5>
              <h6>
                <a href="#">Lern More</a>
                <a href="#">Buy</a>
              </h6>
              <img src={assetipad} alt="" />
            </div>
          </div>

          <div className="flex-row-2">
            <div className="watch-grid grid-img">
              <h1>Watch</h1>
              <h5>SERIES 8</h5>
              <h4>A healthy leap ahead.</h4>
              <h6>
                <a href="#">Lern More</a>
                <a href="#">Buy</a>
              </h6>
              <img src={assetwatch} alt="" />
            </div>
            <div className="vision-grid grid-img">
              <h1>Vision Pro</h1>
              <h5>Welcome to the ero of spatial computing.</h5>
              <h5 className="vision-grid-h5">
                Available early next year in the U.S.
              </h5>
              <h6>
                <a href="#">Lern More</a>
              </h6>
              <img src={assetvision} alt="" />
            </div>
          </div>

          <div className="flex-row-3">
            <div className="trade-grid grid-img">
              <h1>Trade In </h1>
              <h5>Upgrade and save. It's that easy.</h5>
              <h6>
                <a href="#">See what your device is worth</a>
              </h6>
              <img src={assettrade} alt="" />
            </div>
            <div className="card-grid grid-img">
              <h1>Card</h1>
              <h5>
                Get up to 3% Daily Cash back <br />
                with every purchase.{" "}
              </h5>
              <h6>
                <a href="#">Lern More</a>
                <a href="#">Buy</a>
              </h6>
              <img src={assetcard} alt="" />
            </div>
          </div>

          <div className="slider">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              showArrows={false}
              transitionTime={2}
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
        </div>

        <div className="apple-paragraph">
          <p>
            1. Through August 27, 2023, Apple will donate $10 for every purchase
            made in the U.S. using Apple Pay on apple.com, through the Apple
            Store app, or at an Apple Store. Donations are limited to a maximum
            of one million dollars ($1,000,000). The donation goes to the
            National Park Foundation. <br />
            2. Qualified Purchasers receive an Apple Gift Card when they
            purchase an eligible Mac or iPad at a Qualifying Location. Only one
            Apple Gift Card per eligible Mac or iPad per Qualified Purchaser.
            Offer subject to availability. While supplies last. View full terms
            and conditions of offer here. <br />
            Apple Vision Pro has not been authorized as required by the rules of
            the Federal Communications Commission. This device is not, and may
            not be, offered for sale or lease, or sold or leased, until
            authorization is obtained. <br />
            Apple Vision Pro will be available early next year on apple.com and
            at Apple retail stores in the U.S <br />
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch. <br />
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card. <br />
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218. <br />
            A subscription is required for Apple TV+. <br />
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
