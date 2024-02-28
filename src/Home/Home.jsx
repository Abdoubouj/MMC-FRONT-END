import React from 'react'
import Hero from '../Hero/Hero'
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent'
import Test from '../Test'
import OurPartners from '../OurPartners/OurPartners'

const Home = () => {
  return (
    <div className='home-container'>
     <Hero/>
      <UpcomingEvent/>
      <Test/>
      <OurPartners/>
    </div>
  )
}

export default Home