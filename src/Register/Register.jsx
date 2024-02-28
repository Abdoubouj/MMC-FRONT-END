import React from 'react'
import loginImage from "../assets/loginImage.jpg"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register-container h-screen flex justify-center bg-primary items-center'>
      <div className="flex w-[1200px] mx-auto h-[600px] bg-white">
       <div className="flex-1 bg-blue-500 h-full">
        <img src={loginImage} alt="#" className='w-full h-full object-cover'/>
       </div>
       <div className="h-full flex-1 flex items-center justify-center">
        <form className='w-3/4 px-3 py-5 m-auto'>
          <h1 className='text-[40px] text-center font-[600] text-third'>Welcome to mmc</h1>
          <p className='text-slate-700 text-center mb-5'>Please create your account</p>
          <div className="mb-5 flex flex-col gap-2 items-start">
                    <label className='font-semibold text-third capitalize' htmlFor="userName">user name</label>
                    <input type="text" placeholder='enter your userName' name="userName" className='border-[1px] border-primary p-3 w-full focus:outline-none focus:border-third'/>
          </div>
          <div className="mb-5 flex flex-col gap-2 items-start">
                    <label className='font-semibold text-third capitalize' htmlFor="email">email</label>
                    <input type="text" placeholder='enter your email' name="email" className='border-[1px] border-primary p-3 w-full focus:outline-none focus:border-third'/>
          </div>
          <div className="mb-2 flex flex-col gap-2 items-start">
                    <label className='font-semibold text-third capitalize' htmlFor="password">password</label>
                    <input type="text" placeholder='enter your password' name="password" className='border-[1px] border-primary p-3 w-full focus:outline-none focus:border-third'/>
          </div>
          <p className='mb-5'>already have account ? <Link to="/Login" className='font-bold text-third hover:border-b-2 hover:border-third'>Login</Link></p>
          <button className='bg-primary inline-block p-3 text-center w-full text-white font-semibold tracking-wider mb-3'>Sign up</button>
          <Link to="/" className='border-[1px] bg-third text-center border-primary inline-block p-3 w-full text-white font-semibold tracking-wider'>Back</Link>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Register