import React from 'react';
import ReactCardFlip from 'react-card-flip'; 
import {MdSettingsSuggest} from 'react-icons/md'
import {FaLink} from 'react-icons/fa'
import {AiOutlineStock} from 'react-icons/ai'

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
    <div style={{ minHeight: '60vh', backgroundColor: 'whitesmoke'}} className="container place__items__center offer__wrapper">
      <div>
        <h2 style={{color: '#603601', fontSize: 'var(--font-size-lg)', paddingBlock: '3rem'}}>What we offer</h2>
        <div className="offer__container">
          <div>
            <ReactCardFlip isFlipped={isFlippe} flipDirection="vertical">
              <div className="card">
            <MdSettingsSuggest style={{fontSize: '4.5rem'}}/>
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
              <FaLink style={{fontSize: '4.5rem'}}/>
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
              <AiOutlineStock style={{fontSize: '4.5rem'}}/>
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
