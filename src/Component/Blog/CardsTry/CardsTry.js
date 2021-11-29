import React, { Component } from 'react'
import './CardsTry.css'

// images
import img1 from "../image/1.webp";
import img2 from "../image/2.webp";
import img3 from "../image/3.webp";
import img4 from "../image/5.webp";


export class CardsTry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardTryInfo: [
        {
          imgUrl: img1,
          text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        },
        {
          imgUrl: img2,
          text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        },
        {
          imgUrl: img3,
          text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        },
        {
          imgUrl: img4,
          text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        },
      ],
    };
  }
  delete = () => {
    setTimeout(
      {
        componentWillUnmount() {
          alert("would you like delete other types of articles");
        },
      },
      10000
    );
  }

  render() {
    const dataCard = this.state.CardTryInfo;
    const cards = dataCard.map((card, key) => {
      return (
        <div className="card" key={key}>
          <img src={card.imgUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="CATRDS">
        <section className="cardTry">
          <div className="Container">
            <div className="row">
              <h2>more articles</h2>

              <div className="cards">{cards}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CardsTry
