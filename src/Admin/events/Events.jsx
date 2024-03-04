import React, { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import {useSelector , useDispatch} from "react-redux"
import { deleteEvent, getEvents } from "../../features/EventSlice";
import Loader from "../../Loader/Loader";
import { Link , useNavigate } from "react-router-dom";
const Events = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const events = useSelector((state)=>state.event.events);
    const status = useSelector((state)=>state.event.eventStatus);
    const error = useSelector((state)=>state.event.eventError);
    useEffect(()=>{
        dispatch(getEvents());
    },[dispatch])
    console.log(status);
    console.log(error);

    const handleDelete = (eventId)=>{
       confirm("are you sure to delete");
       dispatch(deleteEvent(eventId));
       navigateTo("/admin/events",{replace:true});
    }
  return (
    <div className="admin-events-container min-h-screen py-6">
      <div className="max-w-[1100px] mx-auto shadow-md rounded-lg bg-white h-full p-3">
        <div className="border-b-[1px] border-slate-300 flex justify-between items-center">
          <h1 className="text-slate-500 py-2 text-[25px] capitalize">
           events
          </h1>
          <Link to="/admin/Events/AddEvent" className="add_btn inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold">
            add event
          </Link>
        </div>
        {/* <div className="filters-box flex flex-col gap-2 mt-5">
          <div className="search-box">
            <input
              type="search"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full"
            />
          </div>
          <div className="others flex justify-center gap-4">
            <input
              type="date"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-1/4"
            />
            <input
              type="date"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-1/4"
            />
            <input
              type="text"
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-1/4"
            />
          </div>
          <button className="px-7 w-1/3 rounded-lg mx-auto mt-2 py-3 bg-primary text-white capitalize font-bold">
            Filter
          </button>
        </div>
         */}
      {status === "loading" &&<div className="h-[400px] w-full flex items-center justify-center"><Loader/></div>}
      {error &&<div className="text-red-500 p-2">{error}</div>}
      {status === "succeded" && 
        <table className="table-auto mt-5 w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">id</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">title</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">picture</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">start date</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">end date</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">actions</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {events?.map((event)=>(
                <tr key={event?.eventID}>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{event.id}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{event.title}</div>
                </td>
              <td className="p-2 whitespace-nowrap">
              <div className="text-left">
                    <img src={event?.picture} width={60} alt="" />
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{event.startDate}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{event.endDate}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-primary text-[23px] flex gap-5">
                    <Link to={`/admin/Events/editEvent/${event.eventID}`}><MdEdit/></Link>
                    <button onClick={()=>handleDelete(event.eventID)}><CiTrash/></button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
}
      </div>
    </div>
  );
};

export default Events;
