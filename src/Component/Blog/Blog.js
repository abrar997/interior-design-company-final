import React, { Component } from "react";
import "./Blog.css";

// img
import img from "../Blog/image/future.webp";
import img1 from "../Blog/image/1.webp";
import img2 from "../Blog/image/2.webp";
import img3 from "../Blog/image/3.webp";
import img5 from "../Blog/image/5.webp";

// comp
import Articles from "./Articles/Articles";
import CardsTry from "./CardsTry/CardsTry";
import Swiper from "./Swiper/Swiper";
import Footer from "../Footer/Footer";

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          imgUrl: img,
          p: "AUG 27, 2019",
          span: "ADMIN ",
          span1: "3",
          h2: "Why Lead Generation is Key for Business Growth ?",
          pargraph:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          link: "CONTINUE",
        },
        {
          imgUrl: img1,
          p: "AUG 27, 2019",
          span: "ADMIN ",
          span1: "3",
          h2: "Why Lead Generation is Key for Business Growth ?",
          pargraph:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          link: "CONTINUE",
        },
        {
          imgUrl: img2,
          p: "AUG 27, 2019",
          span: "ADMIN ",
          span1: "3",
          h2: "Why Lead Generation is Key for Business Growth ?",
          pargraph:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          link: "CONTINUE",
        },
        {
          imgUrl: img3,
          p: "AUG 27, 2019",
          span: "ADMIN ",
          span1: "3",
          h2: "Why Lead Generation is Key for Business Growth ?",
          pargraph:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          link: "CONTINUE",
        },
        {
          imgUrl: img5,
          p: "AUG 27, 2019",
          span: "ADMIN ",
          span1: "3",
          h2: "Why Lead Generation is Key for Business Growth ?",
          pargraph:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          link: "CONTINUE",
        },
      ],

      show: true,
    };
  }

  delete = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    let cards;
    if (this.state.show) {
      cards = <CardsTry />;
    }

    return (
      <div>
        <section className="blog">
          <div className="container">
            <div className="row">
              <h1 style={{ marginTop: "70px" }}>
                Best things to do is to read an articles
              </h1>

              <Articles data={this.state.info} />

              {cards}
              <div className="delete">
                <button onClick={this.delete}>
                  <i className="bi bi-x-lg"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </button>
              </div>
              <Swiper />
              <Footer />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
