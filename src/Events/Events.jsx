import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAnglesRight } from "react-icons/fa6";
import { RiFilter3Fill } from "react-icons/ri";
import { TfiClose, TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutGrid4 } from "react-icons/tfi";
const Events = () => {
    const [showFilters , setShowFilters] = useState(false);
    const [items , setItems] = useState(4);
    console.log(items);
  return (
    <div className='events-container'>
        {showFilters &&
        <div className="h-screen z-20 fixed top-0 left-0 w-full before:fixed before:content-[''] before:w-full before:h-full before:bg-slate-900 before:opacity-25 before:top-0 before:left-0">
         <div className='filters-box fixed top-0 left-0 h-full w-[350px] opacity-100 z-30 bg-white'>
            <div className="flex justify-between items-center p-3">
                <h2 className='text-[20px] text-primary'>Filters</h2>
            <button className='text-[20px] text-primary' onClick={()=>{setShowFilters(false)}}>
               <TfiClose/>
            </button>
            </div>
            <form className='w-full p-3'>
                <div className="mb-5 flex flex-col gap-2">
                    <label className='font-semibold text-third capitalize' htmlFor="from">From</label>
                    <input type="date" name="from" className='border-[1px] border-primary p-3'/>
                </div>
                <div className="mb-5 flex flex-col gap-2">
                    <label className='font-semibold text-third capitalize' htmlFor="to">to</label>
                    <input type="date" name="to" className='border-[1px] border-primary p-3'/>
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <label className='font-semibold text-third capitalize' htmlFor="city">city</label>
                    <select name="city" className='border-[1px] border-primary p-3'>
                       <option value="rabat">rabat</option>
                       <option value="rabat">rabat</option>
                       <option value="rabat">rabat</option>
                       <option value="rabat">rabat</option>
                    </select>
                </div>
                <div className="mb-5 flex justify-center items-center gap-2">
                    <button className='border-[1px] border-primary  text-primary px-14 py-3 font-[500]'>Clear all</button>
                    <button className='bg-primary text-white px-10 py-3 font-[500]'>Apply</button>
                </div>
            </form>
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
            <div className="flex justify-between items-center">
            <button onClick={()=>{setShowFilters(true)}} className='flex justify-center items-center gap-3 px-4 py-2 border-[1px] border-primary text-primary my-5 text-[18px] font-semibold'>
                <span>Filters</span>
                <span>
               <RiFilter3Fill/>
                </span>
            </button>
            <div className="displays flex items-center gap-2">
                <button onClick={()=>setItems(3)}>
                   <TfiLayoutGrid3 className={`text-[22px] ${items === 3 && 'text-blue-500'}`}/>
                </button>
                <button onClick={()=>setItems(4)}>
            <TfiLayoutGrid4 className={`text-[24px] ${items === 4 && 'text-blue-500'}`}/>
                </button>
            </div>
            </div>
            <div className="events-items flex flex-wrap gap-10 items-center justify-center lg:justify-start lg:pb-5 lg:pt-5 pb-[190px] pt-[100px] mt-5">
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
                    <h1 className='mt-1 font-semibold capitalize text-black'>Transformation cloud azure</h1>
                    <h2 className='mt-1 font-normal capitalize text-slate-500'>ensa beni mellal</h2>
                    <h3 className='mt-1 font-[500] capitalize text-primary'>12-08-2025</h3>
                </div>
                <div className={`event-item mb-5 ${items === 3 ?'w-[350px]':'w-[260px]'}`}>
                    <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className={`w-full inline-block border-[1px] border-primary ${items === 3 ?'h-[420px]':'h-[330px]'}`} alt="" />
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