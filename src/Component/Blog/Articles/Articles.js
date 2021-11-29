import React, { Component } from "react";
import './Articles.css'

export class Articles extends Component {

  render() {


  const { data } = this.props;
  const mapData = data.map((article, ind) => {
  return article.imgUrl.length > 2 ? (
    <div key={ind} className="arti">
      <div className="images">
        <img src={article.imgUrl} />
      </div>
      <div className="desc">
        <a>
          <p>{article.p} </p>
        </a>
      
        <a>
          <span>{article.span} </span>
        </a>
       
        <a>
          <i className="bi bi-chat-right-text-fill ml-4 mr-4"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-right-text-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
          </svg>
          <span>{article.span1} </span>
        </a>
      </div>
      
      <div className="textss">
        <h2>{article.h2}</h2>
        <h5>{article.pargraph} </h5>
        <a>
          <p>
            {article.link} <i className="bi bi-arrow-right"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </p>
        </a>
      </div>
    </div>
    ):(<h1>read more article</h1>);
});





    return (
        <div>
          <section className="articles">
            <div clas="container">
              <div className="row">
                <div className="listArticles">{mapData}</div>
              </div>
            </div>
          </section>
        </div>

    );
  }
}




export default Articles

 