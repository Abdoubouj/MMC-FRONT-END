import React, { useEffect, useState } from 'react'
import {Link, useParams , useNavigate} from "react-router-dom"
import axios from "axios";
import {useDispatch} from "react-redux"
import { editUser } from '../../features/UserSlice';
const AddUser = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigateTo = useNavigate();
    const BASE_URL = import.meta.env.VITE_REACT_API_URL;
    const [user , setUser] = useState({
        userID:parseInt(id),
        userEmail:"",
        userPassword:"",
        firstName:"",
        lastName:"",
        gender:"",
        phone:"",
        city:"",
        userStatus:""
    })

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(editUser(user));
        navigateTo("/admin/Users",{replace:true})
    }

    useEffect(()=>{
        const fetchUser = async ()=>{
            const response = await axios.get(`${BASE_URL}User/${parseInt(id)}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            const {data} = response;
            setEvent({
                userID:parseInt(id),
                userEmail:data?.userEmail,
                userPassword:data?.userPassword,
                firstName:data?.firstName,
                lastName:data?.lastName,
                gender:data?.gender,
                phone:data?.phone,
                city:data?.city,
                userStatus:data?.userStatus
            })
        }
        fetchUser();
    },[])
  return (
    <div className="admin-users-container min-h-screen py-6">
      <div className="max-w-[1100px] mx-auto shadow-md rounded-lg bg-white h-full p-3">
        <div className="border-b-[1px] border-slate-300 flex justify-between items-center">
          <h1 className="text-slate-500 py-2 text-[25px] capitalize">
            edit user
          </h1>
          <Link
            to="/admin/Users"
            className="add_btn inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold"
          >
            Back
          </Link>
        </div>
        <form className="add-user-form flex flex-wrap gap-5 p-5" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="email" className="font-[600] capitalize text-primary">email</label>
            <input
            onChange={handleChange} value={user.userEmail}
             name="userEmail"
              type="text"
              placeholder="user email ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="password" className="font-[600] capitalize text-primary">password</label>
            <input
            onChange={handleChange} value={user.userPassword}
            name="userPassword"
            placeholder="user password ..."
              type="password"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="firstName" className="font-[600] capitalize text-primary">first Name</label>
            <input
            onChange={handleChange} value={user.firstName}
            name="firstName"
            placeholder="first name ..."
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="lastName" className="font-[600] capitalize text-primary">last Name</label>
            <input
            onChange={handleChange} value={user.lastName}
            name="lastName"
            placeholder="last name ..."
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="gender" className="font-[600] capitalize text-primary">gender</label>
             <select name="gender"  onChange={handleChange} className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary" value={user.gender} >
                <option value="gender ..." selected>select gender</option>
                <option value="men">men</option>
                <option value="women">women</option>
             </select>
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="phone" className="font-[600] capitalize text-primary">phone</label>
            <input
            onChange={handleChange} value={user.phone}
            name="phone"
            placeholder="num phone ..."
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="city" className="font-[600] capitalize text-primary">city</label>
            <input
            onChange={handleChange} value={user.city}
            name="city"
            placeholder="user city ..."
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="userStatus" className="font-[600] capitalize text-primary">User role</label>
             <select name="userStatus"  onChange={handleChange} className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary" value={user.userStatus} >
                <option value="role ..." selected>select role</option>
                <option value="admin">admin</option>
                <option value="speaker">speaker</option>
                <option value="user">user</option>
             </select>
          </div>
          <div className="w-full">
           <button type="submit" className="inline-block px-5 py-2 rounded-lg bg-green-500 text-white capitalize font-bold">edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

















