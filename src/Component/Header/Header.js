import React from 'react'
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                   <h3> code / <span className="span"> Mu. </span></h3>
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="nav-NavLink active"
                      
                          aria-current="page"
                          to="/Home"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/Work">
                          work
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/About">
                          about
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/Blog">
                          Blog
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/Contact">
                          contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            </div>   
        </div>
    )
}

export default Header
