import React from 'react'
import Header from "../Header/Header"
import {Outlet} from "react-router-dom"
const UserLayout = ({role}) => {
  return (
    <div className="user_layout">
        <Header role={role}/>
        <Outlet/>
    </div>
  )
}

export default UserLayout