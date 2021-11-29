import React, { Component } from "react";
import "./Swiper.css";

// img
import img1 from "../image/1.webp";
import img2 from "../image/2.webp";
import img3 from "../image/3.webp";
import img5 from "../image/5.webp";


export class Swiper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newProduct: img1,
      autoplay: false,
    };
  }

      componentDidMount() {
      setTimeout(() => {
        this.setState({ newProduct: img2, autoplay: true });
      }, 4000);
      setTimeout(() => {
        this.setState({ newProduct: img3 });
      }, 6000);

      setTimeout(() => {
        this.setState({ newProduct: img1 });
      }, 5000);

      setTimeout(() => {
        this.setState({ newProduct: img5 });
      }, 4000);
      }

  render() {
    return (
      <div>
        <section className="swiper"  data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="image">
                <h1> Enjoy your eyes by looking at our designs</h1>
                <img src={this.state.newProduct} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Swiper;
