import React from 'react';

import './inter.css'

const Inter = () => {
  return (
    <div className="container inter__container">
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
            <h2 style={{textAlign: 'center', backgroundColor: 'grey'}}>Normal</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 130000</li>
                <li>5mbps</li>
              </ul>
            </div>
          </div>

          <div className="inter__card1">
            <h2 style={{textAlign: 'center'}}>Diamond</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 550000</li>
                <li>25mbps</li>
              </ul>
            </div>
          </div>

          <div className="inter__card1">
            <h2 style={{textAlign: 'center'}}>Silver</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 250000</li>
                <li>10mpbs</li>
              </ul>
            </div>
          </div>

          <div className="inter__card1">
            <h2 style={{textAlign: 'center'}}>Gold</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 350000</li>
                <li>15mbps</li>
              </ul>
            </div>
          </div>

          <div className="inter__card1">
            <h2 style={{textAlign: 'center'}}>Platimum</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 400000</li>
                <li>20mbps</li>
              </ul>
            </div>
          </div>

          <div className="inter__card1">
            <h2 style={{textAlign: 'center'}}>Cooperate</h2>
            <div className="inter__card">
              <ul>
                <li>UGX 750000</li>
                <li>30mbps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inter;
