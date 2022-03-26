import React from 'react';

import './inter.css'

const Inter = () => {
  return (
    <div className="container">
      <div>
        <h2>Connect to Internet</h2>
        <p>
          Hostalite is one of the largest web hosting companies with more than
          12,000 hosted domains. We have highly professional employees to
          provide you around-the-clock superior support. We are the perfect
          choice whether you are looking for business, personal, or Enterprise
          hosting.
        </p>
        <div className="inter__wrapper">
          <div className="inter__card1">
            <h2 style={{textAlign: 'center'}}>Special</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 280000</li>
                <li>25mpbs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inter;
