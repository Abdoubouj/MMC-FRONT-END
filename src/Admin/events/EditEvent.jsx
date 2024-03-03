import React, { useEffect, useState } from 'react'
import {Link, useParams , useNavigate} from "react-router-dom"
import axios from "axios";
import {useDispatch} from "react-redux"
import { editEvent } from '../../features/EventSlice';
const EditEvent = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const BASE_URL = import.meta.env.VITE_REACT_API_URL;
    const [event , setEvent] = useState({
        eventID:parseInt(id),
        title:"",
        picture:"",
        startDate:"",
        endDate:"",
        description:""
    });

    const handleChange = (e)=>{
        setEvent({...event,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(editEvent(event));
        navigateTo("/admin/Events",{replace:true})
    }

    useEffect(()=>{
        const fetchEvent = async ()=>{
            const response = await axios.get(`${BASE_URL}Event/${parseInt(id)}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            const {data} = response;
            setEvent({
                eventID:parseInt(id),
                title:data?.title,
                picture:data?.picture,
                startDate:data?.startDate,
                endDate:data?.endDate,
                description:data?.description,
            })
        }
        fetchEvent();
    },[])
    console.log(event);
  return (
    <div className="admin-events-container min-h-screen py-6">
    <div className="max-w-[1100px] mx-auto shadow-md rounded-lg bg-white h-full p-3">
      <div className="border-b-[1px] border-slate-300 flex justify-between items-center">
        <h1 className="text-slate-500 py-2 text-[25px] capitalize">
          edit event
        </h1>
        <Link
          to="/admin/Events"
          className="add_btn inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold"
        >
          Back
        </Link>
      </div>
      <form className="add-event-form flex flex-wrap gap-5 p-5" onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col gap-2 w-[450px]">
          <label htmlFor="title" className="font-[600] capitalize text-primary">title</label>
          <input
          onChange={handleChange} value={event.title}
           name="title"
            type="text"
            placeholder="event title ..."
            className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2 w-[450px]">
          <label htmlFor="picture" className="font-[600] capitalize text-primary">picture</label>
          <input
          onChange={handleChange} value={event.picture}
          name="picture"
          placeholder="event picture ..."
            type="text"
            className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2 w-[450px]">
          <label htmlFor="startDate" className="font-[600] capitalize text-primary">startDate</label>
          <input
          onChange={handleChange} value={event.startDate}
          name="startDate"
          placeholder="event start date ..."
            type="datetime-local"
            className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2 w-[450px]">
          <label htmlFor="endDate" className="font-[600] capitalize text-primary">endDate</label>
          <input
          onChange={handleChange} value={event.endDate}
          name="endDate"
          placeholder="event end date ..."
            type="datetime-local"
            className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2 w-[450px]">
          <label htmlFor="description" className="font-[600] capitalize text-primary">description</label>
          <textarea onChange={handleChange} value={event.description} name="description" placeholder="event description ..." className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary" cols="30" rows="10"></textarea>
        </div>
        <div className="w-full">
         <button type="submit" className="inline-block px-5 py-2 rounded-lg bg-green-500 text-white capitalize font-bold">edit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EditEvent