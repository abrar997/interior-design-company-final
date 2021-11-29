import React, { Component } from "react";
import img from "../image/about.webp";
import "./Col.css";

export class Col extends Component {
  render() {
    return (
      <div className="Col">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 image" data-aos="zoom-in">
              <img src={img} />
            </div>
            <div
              className="col-lg-6 text"
            >
    
              <span>WELCOME</span>
              <h2>
                code/<span> mu. </span> is An Architects Agency
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country. A
                small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <h1>50 </h1>
              <span className="ex"> years Experienced</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Col;
