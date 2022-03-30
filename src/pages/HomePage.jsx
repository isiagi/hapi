import React from 'react'
import Hero1 from '../components/Hero1'
import Inter from '../components/inter/Inter'
import Nic from '../components/nic/Nic'
import Offer from '../components/offer/Offer'
import Why from '../components/why/Why'
import Contact from '../components/homeContact/Home'

const HomePage = () => {
  return (
    <div>
      <Hero1 />
      <Offer />
      <Why />
      <Nic />
      <Inter />
      <Contact />
    </div>
  )
}

export default HomePage