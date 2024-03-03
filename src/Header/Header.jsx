import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/Logo.svg"
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Header = ({role}) => {
  const header = useRef();
  const [showMenu , setShowMenu] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) { // Check if scroll position is greater than 50 pixels
  //       header.current.classList.remove("bg-[#0b85ffbd]");
  //       header.current.classList.add("bg-primary");
  //     }else{
  //       header.current.classList.add("bg-[#0b85ffbd]");
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }
  console.log(role);
  
  return (
    <header ref={header} className='header h-[100px] bg-primary flex items-center justify-center z-20 relative md:sticky md:top-0 md:left-0 md:right-0'>
        <div className="w-[1200px] h-full mx-auto flex justify-between items-center px-2">
        <div className="header-logo w-[100px] h-full">
           <img src={logo} className="w-full h-full" alt="app-logo" />
        </div>
        <div className={`header-menu md:flex ${showMenu ? 'absolute top-[100px] bg-primary left-0 w-full' : 'hidden'}`}>
            {/* <ul className='flex gap-4 items-center'> */}
            <ul className={`${showMenu && 'w-full flex flex-col gap-2'} flex gap-4 items-center`}>
                <li><NavLink className={`text-black hover:text-white capitalize tracking-wide font-[600] inline-block px-3 py-2 ${showMenu && 'block w-full'}`} to="/">home</NavLink></li>
                <li><NavLink className={`text-black hover:text-white capitalize tracking-wide font-[600] inline-block px-3 py-2 ${showMenu && 'block w-full'}`} to="/Events">events</NavLink></li>
                <li><NavLink className={`text-black hover:text-white capitalize tracking-wide font-[600] inline-block px-3 py-2 ${showMenu && 'block w-full'}`} to="/Speakers">speakers</NavLink></li>
                <li><NavLink className={`text-black hover:text-white capitalize tracking-wide font-[600] inline-block px-3 py-2 ${showMenu && 'block w-full'}`} to="/About">about us</NavLink></li>
                <li><NavLink className={`text-black hover:text-white capitalize tracking-wide font-[600] inline-block px-3 py-2 ${showMenu && 'block w-full'}`} to="/Contact">contact us</NavLink></li>
                {role === "admin" &&
                <li><NavLink className={`text-black hover:text-white capitalize tracking-wide font-[600] inline-block px-3 py-2 ${showMenu && 'block w-full'}`} to="/admin">dashboard</NavLink></li>
                }
            </ul>
        </div>
        <div className="flex gap-4 items-center">
          {localStorage.getItem("token") ?
          <button onClick={handleLogout} className='px-7 py-3 flex items-center gap-3 justify-center bg-red-500 text-white capitalize font-bold'><FiLogOut/>Logout</button>:
        <div className="authentification">
            <Link to="/Login" className='px-7 py-3 bg-third text-white capitalize font-bold'>sign in</Link>
        </div>
        }
        <button onClick={()=>{setShowMenu(!showMenu)}} className="responsive-bar text-white text-[50px] block md:hidden">
          <FaBars/>
        </button>
        </div>
        </div>
    </header>
  )
}

export default Header