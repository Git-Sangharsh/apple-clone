import React from 'react'
import '../route1/Store.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import api from './apiImage';
import { useState } from 'react';
import { useEffect } from 'react';

const Store = () => {
    const [mainApi, setMainApi] = useState([])

    useEffect(() => {
        setMainApi(api)
    },[])

    console.log('loging mainApi',mainApi)
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  return (
    <div className="Store">
      <div className="Store-Wrapper">
        <div className="chart-store-1">
          <div className="chart-store-1-row">
            <h1>Store.</h1>
            <h2>
              The best way to buy the <br /> products you love.
            </h2>
          </div>
          <div className="special-col">
            <div className="chart-store-2-Ask">
              <img
                style={{ width: "35px", borderRadius: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1684947928869"
                alt=""
              />
              <div className="ask-specialist">
                <h6>Need Shopping Help</h6>
                <a href="#">Find One near you</a>
              </div>
            </div>

            <div className="chart-store-2-Ask">
              <img
                style={{ width: "35px", borderRadius: "30px" }}
                src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg"
                alt=""
              />
              <div className="ask-specialist">
                <h6>Visit an Apple Store</h6>
                <a href="#">Find One near you</a>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-store-2">
          <Carousel responsive={responsive}>
            {
                mainApi?.map((i) => (
                    <div className='carousel-map-div'>
                        <img style={{ width: '120px'}} src={i.url} alt="" />
                        <h3 style={{textAlign : 'center'}}>{i.title}</h3>
                    </div>
                ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Store