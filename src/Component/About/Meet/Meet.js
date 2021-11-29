import React, { Component } from "react";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Meet.css";

export class Meet extends Component {
  render() {
    const { team } = this.props;
    const teamInfo = team.map((item, ind) => {
      return item.img.length > 1 ? (
        <div key={ind} className="item">
          <img src={item.img} />
          <div className="text">
            <h1>{item.name}</h1>
            <h4>{item.job}</h4>
            <ul>
              <li>
               <FontAwesomeIcon icon={faFacebook}/>
              </li>

              <li>
              <FontAwesomeIcon icon={faInstagram}/>
              </li>

              <li>
                  <FontAwesomeIcon icon={faEnvelope}/>
              </li>

              <li>
               <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h1>section is upadate </h1>
      );
    });

    return (
      <div className="Meet" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <span>ARCHITECTS </span>
            <h1>Meet Our Architects</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>

          <div className="team">{teamInfo}</div>
        </div>
      </div>
    );
  }
}

export default Meet;
