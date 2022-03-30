import React from 'react';
import HomePage from './HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/index';
import Wire from '../components/wire/Wire';
import Soft from '../components/soft/Soft';
import HomeContact from '../components/contact/Cont'
import About from '../components/about/About';

const index = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wire" element={<Wire />} />
          <Route path="/soft" element={<Soft />} />
          <Route path="/contact" element={<HomeContact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default index;
