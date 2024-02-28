import React from 'react'
import Header from "../Header/Header"
import {Outlet} from "react-router-dom"
const UserLayout = () => {
  return (
    <div className="user_layout">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default UserLayout