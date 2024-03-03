import React, { useEffect } from 'react'
import {NavLink, Outlet , useNavigate} from "react-router-dom"
import { RxDashboard } from "react-icons/rx";
import { BsTicketPerforated , BsCalendar4Event } from "react-icons/bs";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { PiUsersFourThin } from "react-icons/pi";
import { RiSpeakLine , RiMoneyEuroCircleLine } from "react-icons/ri";
import logo from "../../assets/Logo2.svg"
const AdminLayout = () => {
  const navigateTo = useNavigate();
  useEffect(()=>{
      if(window.location.pathname === "/admin"){
           navigateTo("/admin/dashboard");
      }
  },[])
  return (
    <div className='admin-layout-container flex bg-slate-100'>
        <aside className='sideBar w-[300px] h-screen border-r-[1px] border-slate-300'>
           <div className="sideBar-content">
               <div className="logo flex items-center justify-center">
                <div className="flex items-center rounded-xl">
                 <img src={logo} className='w-[100px] h-[90px]' alt="" />
                 <div className="flex flex-col text-[14px] font-[400]">
                  <h1 className='text-[60px] text-primary'>MMC</h1>
                 </div>
                </div>
               </div>
               <ul className="dashboard-items flex flex-col gap-2 mt-10">
                {/* <li><NavLink to="/admin" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><RxDashboard/></span><span className='group-hover:text-primary tracking-wide'>dashboard</span></NavLink></li> */}
                <li><NavLink to="/admin/Dashboard" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><RxDashboard/></span><span className='group-hover:text-primary tracking-wide'>Dashboard</span></NavLink></li>
                <li><NavLink to="/admin/Events" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><BsTicketPerforated/></span><span className='group-hover:text-primary tracking-wide'>events</span></NavLink></li>
                <li><NavLink to="/admin/Sessions" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><BsCalendar4Event/></span><span className='group-hover:text-primary tracking-wide'>sessions</span></NavLink></li>
                <li><NavLink to="/admin/Users" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><PiUsersFourThin/></span><span className='group-hover:text-primary tracking-wide'>users</span></NavLink></li>
                <li><NavLink to="/admin/Speakers" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><RiSpeakLine/></span><span className='group-hover:text-primary tracking-wide'>speakers</span></NavLink></li>
                <li><NavLink to="/admin/Partners" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><LiaHandsHelpingSolid/></span><span className='group-hover:text-primary tracking-wide'>partners</span></NavLink></li>
                <li><NavLink to="/admin/Sponsors" className='flex gap-4 items-center ps-10 pe-2 py-2 text-slate-500 group capitalize font-[500]' href="#"><span className='border-[1px] border-slate-300 group-hover:border-primary p-2 rounded-md'><RiMoneyEuroCircleLine/></span><span className='group-hover:text-primary tracking-wide'>sponsors</span></NavLink></li>
               </ul>
           </div>
        </aside>
        <div className="right-side-conatiner flex-1">
             <main className='content'>
               <Outlet/>
             </main>
        </div>
    </div>
  )
}

export default AdminLayout