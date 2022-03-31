import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './hero.css';
import React from 'react';

const Hero1 = () => {
  // const [active, setActive] = React.useState(0);
  const [fad, setFad] = React.useState(0);

    setInterval(() => {
      AOS.init({ duration: 1000 });
    }, 2000)
    // alert(fad)

  const fadeImages = [
    {
      url: img1,
      caption: 'Get Connected With High Speed Internet',
      show: 'fade-down',
    },
    {
      url: img2,
      caption: 'Software Services',
      show: 'fade-down',
    },
    {
      url: img3,
      caption: 'Build Your Team With African Developers',
      show: 'fade-right',
    },
  ];

  return (
    <div className="slide-container">
      <Fade onChange={(e) => setFad(e)} duration="4000">
        {fadeImages.map((fadeImage, index) => {

          return (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} alt={fadeImage.caption} />
              </div>
              <div className="image-caption">
                <div style={{ margin: '0 auto' }} data-aos={fadeImage.show}>
                  <h2>{fadeImage.caption}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Hero1;
