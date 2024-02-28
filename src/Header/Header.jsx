import React from 'react'
import logo from "../assets/Logo.svg"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header h-[100px] bg-primary flex items-center justify-center'>
        <div className="w-[1200px] h-full mx-auto flex justify-between items-center">
        <div className="header-logo w-[100px] h-full">
           <img src={logo} className="w-full h-full" alt="app-logo" />
        </div>
        <div className="header-menu">
            <ul className='flex gap-4 items-center'>
                <li><NavLink className='text-white capitalize tracking-wide font-medium inline-block px-3 py-2' to="/">home</NavLink></li>
                <li><NavLink className='text-white capitalize tracking-wide font-medium inline-block px-3 py-2' to="/Events">events</NavLink></li>
                <li><NavLink className='text-white capitalize tracking-wide font-medium inline-block px-3 py-2' to="/Speakers">speakers</NavLink></li>
                <li><NavLink className='text-white capitalize tracking-wide font-medium inline-block px-3 py-2' to="/About">about us</NavLink></li>
                <li><NavLink className='text-white capitalize tracking-wide font-medium inline-block px-3 py-2' to="/Contact">contact us</NavLink></li>
            </ul>
        </div>
        <div className="authentification">
            <a href="" className='px-7 py-3 bg-third text-white capitalize font-bold'>sign in</a>
        </div>
        </div>
    </header>
  )
}

export default Header