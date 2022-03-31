import React from 'react';
import img from '../assets/images/1.jpg';

import './all.css';

const port = [1, 2, 3, 4, 5, 6];

const All = () => {
  return (
    <div className="all__container container">
      {port.map((item) => (
        <div className="card__cont">
          <img src={img} alt="hey" />
          <div className="card__overlay">
            <div className="card__text">View</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
