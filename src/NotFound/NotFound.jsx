import React from 'react'
import notFound from "../assets/notFoundImage.svg"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='not-found-container max-w-[1200px] min-h-screen mx-auto flex items-center'>
        <div className="content w-full p-5">
          <Link to="/" className='px-7 py-3 bg-third text-white capitalize font-bold'>BACK</Link>
          <div className="image text-center w-full">
          <img src={notFound} className='w-[600px] m-auto' alt="" />
          </div>
        </div>
    </div>
  )
}

export default NotFound