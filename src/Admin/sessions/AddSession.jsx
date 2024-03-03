import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux"
import { addSession } from "../../features/SessionSlice";
import { getEvents } from "../../features/EventSlice";
const AddSession = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const events = useSelector(state=>state.event.events);
    const [session , setSession] = useState({
        title:"",
        picture:"",
        address:"",
        dateSession:"",
        description:"",
        eventID:"",
    })
    useEffect(()=>{
         dispatch(getEvents())
    },[dispatch])

    const handleChange = (e)=>{
        setSession({...session,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.prsessionDefault();
        dispatch(addSession(session));
        navigateTo("/admin/Sessions",{replace:true})
    }
    console.log(session);
  return (
    <div className="admin-sessions-container min-h-screen py-6">
      <div className="max-w-[1100px] mx-auto shadow-md rounded-lg bg-white h-full p-3">
        <div className="border-b-[1px] border-slate-300 flex justify-between items-center">
          <h1 className="text-slate-500 py-2 text-[25px] capitalize">
            add new session
          </h1>
          <Link
            to="/admin/Sessions"
            className="add_btn inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold"
          >
            Back
          </Link>
        </div>
        <form className="add-session-form flex flex-wrap gap-5 p-5" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="title" className="font-[600] capitalize text-primary">title</label>
            <input
            onChange={handleChange} value={session.title}
             name="title"
              type="text"
              placeholder="session title ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="picture" className="font-[600] capitalize text-primary">picture</label>
            <input
            onChange={handleChange} value={session.picture}
            name="picture"
            placeholder="session picture ..."
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="address" className="font-[600] capitalize text-primary">address</label>
            <input
            onChange={handleChange} value={session.address}
            name="address"
            placeholder="session address ..."
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="dateSession" className="font-[600] capitalize text-primary">session date</label>
            <input
            onChange={handleChange} value={session.sessionDate}
            name="dateSession"
            placeholder="session end date ..."
              type="datetime-local"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="description" className="font-[600] capitalize text-primary">description</label>
            <textarea onChange={handleChange} value={session.description} name="description" placeholder="session description ..." className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary" cols="30" rows="10"></textarea>
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="event" className="font-[600] capitalize text-primary">event</label>
             <select name="eventID" className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary" value={session.eventID}>
                <option value="select event" onChange={handleChange} selected>select event</option>
                {events.map((event)=>(
                    <option value={event.eventID}>{event?.title}</option>
                ))}
             </select>
          </div>
          <div className="w-full">
           <button type="submit" className="inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSession;

















