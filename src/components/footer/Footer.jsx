import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer__container container">
      <div className="footer__contain">
        <div className="footer__wrapper">
          <div>Logo</div>
          <div className="footer__info">
            GateData Are A IT Solutions & Technology Services Provider
            Institutions. Suitable For IT Solutions, IT Technology, IT Business,
            Consulting, Software, Digital Solution And Any Related Services
            Company Field.
          </div>
          <div>
            <BsFacebook style={{fontSize: '2.5rem'}}/>
            <BsInstagram style={{fontSize: '2.5rem', marginLeft: '1rem'}}/>
            <AiFillTwitterCircle style={{fontSize: '2.5rem', marginLeft: '1rem'}}/>
          </div>
        </div>
        <div>
          <div>Quick Link</div>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div>
          <div>IT Services</div>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div>
          <div>Quick Link</div>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
