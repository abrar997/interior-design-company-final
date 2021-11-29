import React, { Component } from "react";

// comp
import "./About.css";
import Col from "../About/Col/Col";
import Card from "./Card/Card";
import Meet from "./Meet/Meet";
import Customer from "./Customer/Customer";

// images import
import img1 from "./image/1.webp";
import img2 from "./image/2.webp";
import img3 from "./image/3.webp";
import img4 from "./image/4.webp";
import Footer from "../Footer/Footer";

export class About extends Component {
  state = {
    info: [
      {
        h: "Perfectly Design",
        p: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },
      {
        h: "Carefully Plan",
        p: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },

      {
        h: "Smartly Execute",
        p: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      },
    ],

    team: [
      { img: img1, name: "bilal ali", job: "ARCHITECT" },
      { img: img2, name: "abdullah sami", job: "ARCHITECT" },
      { img: img3, name: "mahmood hameed", job: "ARCHITECT" },
      { img: img4, name: "omar seraj", job: "ARCHITECT" },
      { img: img4, name: "abdulrahman ahmad ", job: "ARCHITECT" },
      { img: img3, name: "ahmed abd", job: "ARCHITECT" },
      { img: img2, name: " mohammed abd ", job: "ARCHITECT" },
      { img: img1, name: "Iessa mohammed ", job: "ARCHITECT" },
    ],

    customer: [
      {
        img: img1,
        name: "mohammed omar",
        p: "far for away, behind the word mountains,far from countries vokalia and consantia , there the vlind texs.",
        job: "graphic designer graphic designer ",
      },

      {
        img: img4,
        name: "ahmed ali ",
        p: "far for away, behind the word mountains,far from countries vokalia and consantia , there the vlind texs.",
        job: "system analyst system analyst",
      },

      {
        img: img3,
        name: "ahmed ali",
        p: "far for away, behind the word mountains,far from countries vokalia and consantia , there the vlind texs.",
        job: "system analyst system analyst",
      },
    ],
  };

  render() {
    return (
      <div className="about">
        <h1>
          code/ <span> mu. </span> is An Architecture Agency
        </h1>
        <Col />
        <Card data={this.state.info} />
        <Meet team={this.state.team} />
        <Customer
    customer={this.state.customer}
        />
<Footer />
      </div>
    );
  }
}

export default About;
