import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./Card.css";




export class Card extends Component {
 
  render() {
 
    const { data } = this.props;
    const showData = data.map((type, ind) => {
      return (
        <div key={ind} className="cards d-flex col-lg-4" data-aos="fade-down">
          <div>
            <h2>
              <FontAwesomeIcon icon={faNetworkWired}  />
            </h2>
            <h1>{type.h}</h1>
            <p> {type.p}</p>
          </div>
        </div>
      );
    });

    
    
    return (
      <div className="Card">
        <div className="container">
          <div className="row">
            <div className="carddsss col-lg-4 col-sm-6 col-md-6 col-xl-4">{showData}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
