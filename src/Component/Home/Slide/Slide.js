import React, { useState } from "react";
import './Slide.css';
// img
import img from "../Images/1.webp";
import img1 from "../Images/2.webp";
import img2 from "../Images/3.webp";
import img3 from "../Images/4.webp";
import img4 from "../Images/5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const Slide = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const [dataSlides, setdataSlides] = useState([
    {
      img: img3,
      h1: "brown wood",
      span: "interior",
      p: " a small river named duden flows by their place andsupplies",
      h3: "view project",
    },
    {
      img: img1,
      h1: "water and nigth time",
      span: "extirior",
      p: "a small river named duden flows by their place andsupplies",
      h3: "view project",
    },
    {
      img: img2,
      h1: "white sofas",
      span: "interior",
      p: "a small river named duden flows by their place andsupplies",
      h3: "view project",
    },
    {
      img: img,
      h1: "gray padded chairs",
      span: "interior",
      p: "a small river named duden flows by their place andsupplies",
      h3: "view project",
    },
    {
      img: img3,
      h1: "gray padded chairs",
      span: "interior",
      p: "a small river named duden flows by their place andsupplies",
      h3: "view project",
    },
    {
      img: img4,
      h1: "gray padded chairs",
      span: "interior",
      p: "a small river named duden flows by their place andsupplies",
      h3: "view project",
    },
  ]);
  return (
    <div className="Slides">
      <div className="container">
        <div className="row">
          <Swiper
            pagination={pagination}
            className="mySwiper"
          >
            {dataSlides.map((items, ind) => {
              return (
                <SwiperSlide>
                  <div className="image ">
                    <img src={items.img} className="d-block w-100" />
                  </div>
                  <div className="text">
                    <h1>{items.h1}</h1>
                    <span>{items.span}r</span>
                    <p>{items.p}</p>
                    <h3>
                      <a>{items.h3}</a>
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>{" "}
    </div>
  );
};

export default Slide;
