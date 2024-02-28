import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const EventDetails = () => {
  return (
    <div className='event-details-container'>
        <div className="heading h-[220px] flex flex-col gap-5 items-center justify-center">
            <h1 className='text-white text-[40px] uppercase font-bold'>Event Details</h1>
            <p className='flex gap-5 items-center text-[20px]'>
                <span><Link to="/" className='hover:text-primary hover:border-b-[1px] hover:border-primary'>Home</Link></span>
                <span><FaAnglesRight/></span>
                <span><Link to="/Events" className='hover:text-primary hover:border-b-[1px] hover:border-primary'>Events</Link></span>
                <span><FaAnglesRight/></span>
                <span>Transformation Cloud</span>
            </p>
        </div>
        <div className="events-content max-w-[1200px] px-5 mx-auto mt-14">

        </div>
    </div>
  )
}

export default EventDetails