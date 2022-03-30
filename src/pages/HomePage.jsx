import React from 'react'
import Hero1 from '../components/Hero1'
import Inter from '../components/inter/Inter'
import Nic from '../components/nic/Nic'
import Offer from '../components/offer/Offer'
import Why from '../components/why/Why'
import Contact from '../components/homeContact/Home'
import Out from '../components/out/Out'

const HomePage = () => {
  
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Hero1 />
      <Offer />
      <Why />
      <Nic />
      <Inter />
      <Out />
      <Contact />
    </div>
  )
}

export default HomePage