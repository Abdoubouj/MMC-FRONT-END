import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAnglesRight } from "react-icons/fa6";
import { RiFilter3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
const Events = () => {
    const [showFilters , setShowFilters] = useState(false);
  return (
    <div className='events-container'>
        {showFilters &&
        <div className="h-screen z-0 fixed top-0 left-0 w-full before:fixed before:content-[''] before:w-full before:h-full before:bg-slate-900 before:opacity-25 before:top-0 before:left-0">
            <div className='filters-box fixed top-0 left-0 h-full w-[300px] opacity-100 z-20 bg-white'>
            <div className="flex justify-end p-3">
            <button className='text-[20px] text-primary' onClick={()=>{setShowFilters(false)}}>
               <TfiClose/>
            </button>
            </div>
        </div>
        </div>
        }
        <div className="heading h-[220px] flex flex-col gap-5 items-center justify-center">
            <h1 className='text-white text-[40px] uppercase font-bold'>Events</h1>
            <p className='flex gap-5 items-center text-[20px]'>
                <span><Link to="/" className='hover:text-primary hover:border-b-[1px] hover:border-primary'>Home</Link></span>
                <span><FaAnglesRight/></span>
                <span>Events</span>
            </p>
        </div>
        <div className="events-content max-w-[1200px] px-5 mx-auto mt-14">
            <button onClick={()=>{setShowFilters(true)}} className='flex justify-center items-center gap-3 px-4 py-2 border-[1px] border-primary text-primary my-5 text-[18px] font-semibold'>
                <span>Filters</span>
                <span>
               <RiFilter3Fill/>
                </span>
            </button>
            <div className="events-items flex flex-wrap gap-10 items-center py-5 mt-5">
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className="event-item w-[260px] mb-5">
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className='w-full inline-block h-[330px] border-[1px] border-primary' alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events