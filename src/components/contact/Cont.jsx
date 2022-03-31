import React, {useEffect} from 'react'
import Contact from './Contact'

const Cont = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="soft__container container">
        <div className="soft__banner place__items__center"><h2>CONTACT US</h2></div>
        <Contact />
    </div>
  )
}

export default Cont