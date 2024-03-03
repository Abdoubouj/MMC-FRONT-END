import React from 'react'
import Hero from '../Hero/Hero'
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent'
import OurPartners from '../OurPartners/OurPartners'
import NextEvents from '../Events/NextEvents'

const Home = () => {
  return (
    <div className='home-container'>
     <Hero/>
      <UpcomingEvent/>
      <NextEvents/>
      <OurPartners/>
    </div>
  )
}

export default Home