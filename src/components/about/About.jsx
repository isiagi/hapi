import React from 'react';
import mission from '../../assets/images/mission.jpg';
import vision from '../../assets/images/vision.jpg';

import './about.css';

const About = () => {
  return (
    <div className="about__container container">
      <div className="about__banner place__items__center">
        <h2>About us</h2>
        {/* <p>
          We help organisations connect with their target audience through
          user-focused designs, purposeful content and sustainable technology.
        </p> */}
      </div>
      <div className="about__text">
        <p>
          Happi Tech Corporation is a registered Information company operating
          in Kampala Uganda Africa. Registered under the name of HappiTech
          Enterprise, we later adopted the trade name of HAPPITECH
          Corporation.We are the leading providers of domain name registeration,
          dedicated web hosting, website Design and Ecommerce, Internet service,
          digital marketing solutions in Uganda and East Africa aiming to serve
          the world at large.
        </p>
        <br />
        <p>
          The Company has grown from a small web hosting company in Uganda with
          just two servers into a regional leading industry and recongnized
          hosting provider with more than 200 domains hosted by HappiTech
          Corporation
        </p>
      </div>
      <div className="about__section">
        <div>
        <h2 style={{textAlign: 'center', margin: '4rem 0', color: '#603601'}}>MISSION</h2>
          <div className="about__section1 place__items__center">
            <img src={mission} alt="mission" />
            <p>
              To provide innovative and effective intergrated brand marketing
              and Publicrelations solution whichhelps our clients grow their
              businesses and realise their marketing goals
            </p>
          </div>
        </div>
        <div>
        <h2 style={{textAlign: 'center', margin: '4rem 0', color: '#603601'}}>VISION</h2>
          <div className="about__section1 place__items__center">
            <p>
              Delievering results-oriented brand marketing programs and public
              relations campaigns that enhance our clients awareness, improve
              their sales and foster their growth.
            </p>
            <img src={vision} alt="vision" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
