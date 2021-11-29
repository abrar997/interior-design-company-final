import React, { Component } from "react";

// comp
import Projects from "./Projects/Projects";
import "./Work.css";
import Footer from "../Footer/Footer";

// images
import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import img4 from "./images/4.webp";
import img5 from "./images/5.webp";

export class Work extends Component {
  // state write  here
  state = {
    info: [
      { imgUrl: img1, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img2, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img3, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img4, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img5, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img3, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img2, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img5, projectType: "interior design", name: "White Sofas" },
      { imgUrl: img1, projectType: "interior design", name: "White Sofas" },
    ],
  };

  click1 = () => {
    this.setState({
      info: [
        { imgUrl: img1, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img2, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img3, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img4, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img5, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img3, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img2, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img5, projectType: "interior design", name: "White Sofas" },
        { imgUrl: img1, projectType: "interior design", name: "White Sofas" },
      ],
    });
  };

  click2 = () => {
    {
      this.setState({
        info: [
          {
            imgUrl: img4,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img3,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img2,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img1,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img5,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img4,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img3,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img2,
            projectType: "interior design",
            name: "black rooms ",
          },
          {
            imgUrl: img5,
            projectType: "interior design",
            name: "black rooms ",
          },
        ],
      });
    }
  };
  click3 = () => {
    {
      this.setState({
        info: [
          { imgUrl: img2, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img1, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img3, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img5, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img4, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img3, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img2, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img1, projectType: "interior design", name: "White Sofas" },
          { imgUrl: img5, projectType: "interior design", name: "White Sofas" },
        ],
      });
    }
  };

  click4 = () => {
    {
      this.setState({
        info: [
          { imgUrl: img3, projectType: "interior design", name: "wood room" },
          { imgUrl: img1, projectType: "interior design", name: "wood room" },
          { imgUrl: img2, projectType: "interior design", name: "wood room" },
          { imgUrl: img4, projectType: "interior design", name: "wood room" },
          { imgUrl: img5, projectType: "interior design", name: "wood room" },
          { imgUrl: img2, projectType: "interior design", name: "wood room" },
          { imgUrl: img1, projectType: "interior design", name: "wood room" },
          { imgUrl: img3, projectType: "interior design", name: "wood room" },
          { imgUrl: img4, projectType: "interior design", name: "wood room" },
        ],
      });
    }
  };

  render() {
    return (
      <div>
        <Projects projectss={this.state.info} />
        <div className="conta">
          <div className="buttons">
            <div className="container">
              <div className="row">
                <button onClick={this.click1}>1</button>
                <button onClick={this.click2}>2</button>
                <button onClick={this.click3}>3</button>
                <button onClick={this.click4}>4</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Work;
