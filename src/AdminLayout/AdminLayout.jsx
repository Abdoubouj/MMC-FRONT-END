import React from 'react'
import {Outlet} from "react-router-dom"
import logo from "../assets/Logo2.svg"
const AdminLayout = () => {
  return (
    <div className='admin-layout-container flex bg-slate-100'>
        <aside className='sideBar w-[300px] h-screen border-r-[1px] border-slate-300'>
           <div className="sideBar-content">
               <div className="logo flex items-center justify-center">
                <div className="flex items-center bg-slate-50 border-[1px] border-primary mt-2 p-2 rounded-xl">
                 <img src={logo} className='w-[100px] h-[90px]' alt="" />
                 <div className="flex flex-col text-[14px] font-[600]">
                  <h1 className='text-primary'>Morroco</h1>
                  <h1 className='text-secondary'>Micrsoft</h1>
                  <h1 className='text-third'>Community</h1>
                 </div>
                </div>
               </div>
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