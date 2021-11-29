import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Customer.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export class Customer extends Component {
  render() {
    const { customer } = this.props;
 
    return (
      <div className="customer">
        <div className="container">
          <div className="row">
            <span> TESTIMONY </span>
            <h1>Our satisfied customer says</h1>
            <h5>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </h5>
            <div className="col-lg-10 swiper-customer">
            <Swiper  className="mySwiper">
              {customer.map((items, ind) => {
                return (
                  <SwiperSlide>
                    <div className="text col-lg-8">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        style={{
                          color: "#eee",
                          fontSize: "28px",
                          marginBottom: "40px",
                        }}
                      />

                      <h2>{items.name}</h2>
                      <p>{items.p}</p>
                      <h3>
                        <>{items.job}</>
                      </h3>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        style={{
                          color: "#eee",
                          fontSize: "28px",
                          marginTop: "40px",
                        }}
                      />
                    </div>
                    <div className="image col-lg-4">
                      <img src={items.img} className="d-block w-100" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div></div>
        </div>
      </div>
    );
  }
}

export default Customer;
