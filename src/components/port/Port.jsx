import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './port.css';

const links = [
  { id: '1', tag: 'All', link: 'all' },
  { id: '2', tag: 'Education', link: 'edu' },
  { id: '3', tag: 'Sports', link: 'sport' },
  { id: '4', tag: 'Agriculture', link: 'agri' },
  { id: '5', tag: 'Banking', link: 'bank' },
  { id: '6', tag: 'Ecommerce', link: 'eco' },
  { id: '7', tag: 'NGOs', link: 'ngo' },
  { id: '8', tag: 'Personal', link: 'per' },
];

const Port = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="port__container container">
      <div style={{ paddingTop: '15vh', marginBottom: '20px' }}>
        <h1 style={{ color: '#361500', textAlign: 'center' }}>All Portfolio</h1>
      </div>
      <div className="port__wrapper">
        {links.map((link) => (
          <div>
            <NavLink
              className={`port__link ${({ isActive }) =>
                isActive ? 'active' : ''}`}
              id={link.id}
              to={`/port/${link.link}`}
            >
              {link.tag}
            </NavLink>
          </div>
        ))}
      </div>
      <div style={{paddingBottom: '4rem'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Port;
