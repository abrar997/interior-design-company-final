import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

// comp
import "../Contact/Contact.css";
import Footer from "../Footer/Footer";

export class Contact extends Component {

  render() {

    return (
      <div>
        <div className="contact">
          <div className="container">
            <div className="row">
              <h1>
                Have any project or query? Just say hello and <br />
                <a> Mail Us </a>
              </h1>

              <div className="col-lg-5 left mt-4 ">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="your subject"
                    />
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Send
                  </button>
                </form>
              </div>

              <div className="col-lg-6 right">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} style={{ color: "#eee" }} />
                    <a>+9647xxxxxxxxx </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faVoicemail}
                      style={{ color: "#eee" }}
                    />
                    <a>abraraaaalrawi97@gmail.com</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#eee" }}
                    />
                    <a> Abrar Alrawi</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "#eee" }}
                    />
                    <a>abrar alrawi</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
