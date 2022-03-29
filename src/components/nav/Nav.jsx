import React from 'react';
import { MdTableRows } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nav__wrapper">
      <h1>HappiTech</h1>
      <div className={`${'header'} ${open ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <div className="nav__drop">
              <button className="nav__btn">SERVICES</button>
              <div className="dropdown__menu">
                <div>
                  {/* <div class="dropdown-heading">IT SERVICES</div> */}
                  <div class="dropdown-links">
                    <Link to="/wire" class="link">
                      Wireless Internet
                    </Link>
                    {/* <a href="/good" class="link">
                      Website / Web Hosting
                    </a> */}
                    <Link to="/soft" class="link">
                      Software Development
                    </Link>
                    <Link to="/" class="link">
                      IT Constancy
                    </Link>
                    <Link to="/" class="link">
                      Social and digital media marketing
                    </Link>
                    <Link to="/" class="link">
                      Computer system sales and maintenance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/port">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      {open ? (
        <GiCancel className="toogle__icon" onClick={() => setOpen(false)} />
      ) : (
        <MdTableRows className="toogle__icon" onClick={() => setOpen(true)} />
      )}
    </div>
  );
};

export default Nav;
