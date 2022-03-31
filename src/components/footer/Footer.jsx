import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer__container container">
      <div className="footer__contain">
        <div className="footer__wrapper">
          <div><h3>HappiTech</h3></div>
          <div className="footer__info">
            HappiTech is a IT Solutions & Technology Services Provider
            Company. Suitable For IT Solutions, IT Technology, IT Business,
            Consulting, Software, Digital Solution And Any Related Services
            Company Field.
          </div>
          <div>
            <BsFacebook style={{ fontSize: '2.5rem',color: 'whitesmoke' }} />
            <BsInstagram style={{ fontSize: '2.5rem', marginLeft: '1rem', color: 'whitesmoke' }} />
            <AiFillTwitterCircle
              style={{ fontSize: '2.5rem', marginLeft: '1rem', color: 'whitesmoke' }}
            />
          </div>
        </div>
        <div className="footer__links">
          <div><h3>Quick Link</h3></div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links">
          <div><h3>Services</h3></div>
          <div>
            <ul>
              <li>
                <Link to="/wire">Wireless Internet</Link>
              </li>
              <li>
                <Link to="/soft">Software Development</Link>
              </li>
              <li>
                <Link to="/contact">IT Consultancy</Link>
              </li>
              <li>
                <Link to="/">Social and digital media marketing</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links">
          <div><h3>Resources</h3></div>
          <div>
            <ul>
              <li>Careers</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
