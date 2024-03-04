import React, { useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux"
import { getUsers } from "../../features/UserSlice";
import { addSpeaker } from "../../features/SpeakerSlice";
const AddSpeaker = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const users = useSelector(state=>state.user.users);
  const [speaker , setSpeaker] = useState({
        speakerID:"",
        picture:"",
        mct:"",
        mvp:"",
        biography:"",
        facebook:"",
        instagram:"",
        linkedIn:"",
        twitter:"",
        website:""
      })
      useEffect(()=>{
            dispatch(getUsers());
      },[dispatch])

    const handleChange = (e)=>{
        setSpeaker({...speaker,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addSpeaker(speaker));
        navigateTo("/admin/Speakers",{replace:true})
    }
  return (
    <div className="admin-users-container min-h-screen py-6">
      <div className="max-w-[1100px] mx-auto shadow-md rounded-lg bg-white h-full p-3">
        <div className="border-b-[1px] border-slate-300 flex justify-between items-center">
          <h1 className="text-slate-500 py-2 text-[25px] capitalize">
            add new speaker
          </h1>
          <Link
            to="/admin/Speakers"
            className="add_btn inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold"
          >
            Back
          </Link>
        </div>
        <form className="add-user-form flex flex-wrap gap-5 p-5" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="speakerID" className="font-[600] capitalize text-primary">speakerID</label>
           <select name="speakerID" onChange={handleChange} value={speaker.speakerID} className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary">
            {users?.map((user)=>(
              <option value={user?.userID}>{user?.firstName} {user?.lastName}</option>
            ))}
           </select>
          </div>

          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="picture" className="font-[600] capitalize text-primary">picture</label>
            <input
            onChange={handleChange} value={speaker.picture}
             name="picture"
              type="text"
              placeholder="speaker picture ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="mct" className="font-[600] capitalize text-primary">mct</label>
           <select name="mct" onChange={handleChange} value={speaker.mct} className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary">
              <option value="0">no</option>
              <option value="1">yes</option>
           </select>
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="mvp" className="font-[600] capitalize text-primary">mvp</label>
           <select name="mvp" onChange={handleChange} value={speaker.mvp} className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary">
              <option value="0">no</option>
              <option value="1">yes</option>
           </select>
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="biography" className="font-[600] capitalize text-primary">biography</label>
            <textarea onChange={handleChange} value={speaker.biography} name="biography" placeholder="speaker biography ..." className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary" cols="30" rows="5"></textarea>
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="facebook" className="font-[600] capitalize text-primary">facebook</label>
            <input
            onChange={handleChange} value={speaker.facebook}
             name="facebook"
              type="text"
              placeholder="speaker facebook ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="instagram" className="font-[600] capitalize text-primary">instagram</label>
            <input
            onChange={handleChange} value={speaker.instagram}
             name="instagram"
              type="text"
              placeholder="speaker instagram ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="linkedIn" className="font-[600] capitalize text-primary">linkedIn</label>
            <input
            onChange={handleChange} value={speaker.linkedIn}
             name="linkedIn"
              type="text"
              placeholder="speaker linkedIn ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="twitter" className="font-[600] capitalize text-primary">twitter</label>
            <input
            onChange={handleChange} value={speaker.twitter}
             name="twitter"
              type="text"
              placeholder="speaker twitter ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2 w-[450px]">
            <label htmlFor="website" className="font-[600] capitalize text-primary">website</label>
            <input
            onChange={handleChange} value={speaker.website}
             name="website"
              type="text"
              placeholder="speaker website ..."
              className="border-[1px] rounded-lg border-slate-300 px-3 py-2 w-full focus:outline-none focus:border-primary"
            />
          </div>
          <div className="w-full">
           <button type="submit" className="inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpeaker;

















