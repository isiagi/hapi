import React from 'react';
import {ImLocation2} from 'react-icons/im'
import {BsClockFill} from 'react-icons/bs'
import {RiBaseStationLine} from 'react-icons/ri'

import './contact.css';

const Contact = () => {
  return (
    <div className="contact__wrapper container">
      <div className="contact__first">
        <h2>Our Contact</h2>
      </div>
      <div className="contact__sec">
        <div className="contact__details">
          <div className="contact__form">
            <form>
              <div className="contact__group">
                <input type="text" className="contact__input" placeholder="Name*"/>
                <input type="text" className="contact__input" placeholder="Email*"/>
              </div>
              <div className="contact__group">
                <input type="text" className="contact__input" placeholder="Phone*"/>
                <input type="text" className="contact__input" placeholder="Organisation"/>
              </div>
              <div className="contact__area">
                <textarea placeholder="Message Here" className='contact__text' rows="6"/>
              </div>
              <div className="contact__button">
              <button style={{color: 'red'}}>Submit</button>
              </div>
            </form>
          </div>
          <div className="contact__info">
            <div className="place__items__center contact__info1">
              <div><ImLocation2  style={{fontSize: '2.5rem'}}/></div>
              <div>
                <h4>Office Address</h4>
                <p>Ham Tower, Makerere Road</p>
                <p>Kampala, Uganda</p>
              </div>
            </div>
            <div className="place__items__center contact__info1">
              <div><RiBaseStationLine style={{fontSize: '2.5rem'}} /></div>
              <div>
                <h4>Online Address</h4>
                <p>+256 785 988 864</p>
                <p>info@happitechcorporation.com</p>
              </div>
            </div>
            <div className="place__items__center contact__info1">
              <div><BsClockFill style={{fontSize: '2.5rem'}} /></div>
              <div>
                <h4>Working Hours</h4>
                <p>Open Monday to Friday</p>
                <p>8:00am - 18:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
