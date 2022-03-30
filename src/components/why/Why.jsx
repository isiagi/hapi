import React from 'react';
import {TiTick} from 'react-icons/ti'

import './why.css';

const Why = () => {
  return (
    <div className="why__container container">
      <div className="why__wrapper">
        <h2>Why Choose Us</h2>
        <ul>
          <li><TiTick />
            We have seen a gap in the current market which needs to be addressed
            with solutions in all angles
          </li>
          <li><TiTick />
            We have a great customer support team that will always be available
            for our clients
          </li>
        </ul>
      </div>
      <div className="why__wrapper y">
        <h2>Why We Exist</h2>
        <ul>
          <li><TiTick />
            We have a great customer support team that will always be available
            for our clients Many business and individuals do lack well organised
            computer system that can enable tem have relable access totechnology
          </li>
          <li><TiTick />
            Many business and individuals lack reliable wireless internet
            service provision to enable them achieve their best business and
            normal social operation
          </li>
          <li><TiTick />
            90% of Africian products are not well presented onto the world
            market. Many Africian products lack a place where they can have
            business well managed and traded with the world at large.
          </li>
          <li><TiTick />
            Many companies and businesses that use computer systems do lack
            secured systems that may be able to operate well in accordance to
            having good protection from external attacks like viruses, online
            attacks etc.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Why;
