import React from 'react'
import Hero1 from '../components/Hero1'
import Inter from '../components/inter/Inter'
import Nic from '../components/nic/Nic'
import Offer from '../components/offer/Offer'
import Why from '../components/why/Why'

const HomePage = () => {
  return (
    <div>
      <Hero1 />
      <Offer />
      <Why />
      <Nic />
      <Inter />
    </div>
  )
}

export default HomePage