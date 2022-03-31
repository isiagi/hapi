import React from 'react'
import { Link } from 'react-router-dom'

import './home.css'

const Home = () => {
  return (
    <div className="home__container">
        <div className="home__banner place__items__center">
            <button className="home__button"><Link to='/contact'>Contact Us</Link></button>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Home