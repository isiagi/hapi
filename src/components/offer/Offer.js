import React from 'react';
import ReactCardFlip from 'react-card-flip';

import './offer.css';

const Offer = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isFlippe, setIsFlippe] = React.useState(false);
  const [isFlipp, setIsFlipp] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  const handleClic = (e) => {
    e.preventDefault();

    setIsFlippe(!isFlippe);
  };

  const handleCli = (e) => {
    e.preventDefault();

    setIsFlipp(!isFlipp);
  };
  return (
    <div style={{ minHeight: '60vh'}} className="container place__items__center offer__wrapper">
      <div>
        <h2>What we offer</h2>
        <div className="offer__container">
          <div>
            <ReactCardFlip isFlipped={isFlippe} flipDirection="vertical">
              <div className="card">
                Internet Service
                <button onClick={handleClic}>Click to flip</button>
              </div>
              <div className="card">
                Get Connected With High Speed Internet
                <button onClick={handleClic}>More</button>
              </div>
            </ReactCardFlip>
          </div>
          <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div className="card">
                Software Service
                <button onClick={handleClick}>Click to flip</button>
              </div>
              <div className="card">
                <ul>
                  <li>Web Hosting</li>
                  <li>Web Designing</li>
                  <li>IT Constancy</li>
                  <li>Software Developer Outsourcing</li>
                </ul>
                <button onClick={handleClick}>Click to flip</button>
              </div>
            </ReactCardFlip>
          </div>
          <div>
            <ReactCardFlip isFlipped={isFlipp} flipDirection="vertical">
              <div className="card">
                Social And Digital Media Marketing
                <button onClick={handleCli}>Other Service</button>
              </div>
              <div className="card">
                Computer Systems Sales And Maintenance
                <button onClick={handleCli}>Other Service</button>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;