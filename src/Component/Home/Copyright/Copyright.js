import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./Copyright.css";

const Copyright = () => {
    return (
      <div className="copyright">
        <div className="container">
          <div className="row">
              <div className="d-flex">
            <div className="col-lg-8 left">
              copy right <FontAwesomeIcon icon={faCopyright} />
              2021 all eights reserved | this tempalte is made with
              <span>Abrar Muthanna Alrawi</span>
            </div>
          

          <div className=" right">
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>

              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>

              <li>
                <FontAwesomeIcon  icon={faVoicemail}/>
              </li>

              <li>
               <FontAwesomeIcon icon={faTwitter}/>
              </li>
            </ul>
          </div></div>
        </div>
      </div></div>
    );
}

export default Copyright
