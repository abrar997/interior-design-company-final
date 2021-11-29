import React, { Component } from "react";

// comp
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Copyright from "../Home/Copyright/Copyright";
export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 logo ">
              <h1 className="mb-4">
                code/ <span>Mu.</span>
              </h1>
              <p className="font-italic  text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#">Q/A</a>
                </li>
                <li className="mb-2">
                  <a href="#">services</a>
                </li>
                <li className="mb-2">
                  <a href="#">projects</a>
                </li>
                <li className="mb-2">
                  <a href="#">Our Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#">Login</a>
                </li>
                <li className="mb-2">
                  <a href="#">Register</a>
                </li>
                <li className="mb-2">
                  <a href="#">Wishlist</a>
                </li>
                <li className="mb-2">
                  <a href="#">Our Products</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.At
                itaque temporibus.
              </p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Copyright />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
