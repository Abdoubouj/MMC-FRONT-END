import React, { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import {useSelector , useDispatch} from "react-redux"
import { deleteUser, getUsers } from "../../features/UserSlice";
import Loader from "../../Loader/Loader";
import { Link , useNavigate } from "react-router-dom";
const Users = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const users = useSelector((state)=>state.user.users);
    const status = useSelector((state)=>state.user.userStatus);
    const error = useSelector((state)=>state.user.userError);
    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])
    console.log(users);

    const handleDelete = (userId)=>{
       confirm("are you sure to delete");
       dispatch(deleteUser(userId));
       navigateTo("/admin/users",{replace:true});
    }
  return (
    <div className="admin-users-container min-h-screen py-6">
      <div className="max-w-[1100px] mx-auto shadow-md rounded-lg bg-white h-full p-3">
        <div className="border-b-[1px] border-slate-300 flex justify-between items-center">
          <h1 className="text-slate-500 py-2 text-[25px] capitalize">
           users
          </h1>
          <Link to="/admin/Users/AddUser" className="add_btn inline-block px-5 py-2 rounded-lg bg-primary text-white capitalize font-bold">
            add user
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
      {status === "failed" &&<div className="text-red-500 p-2">{error}</div>}
      {status === "succeded" && 
        <table className="table-auto mt-5 w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">id</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">email</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">password</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">first name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">last name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">gender</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">phone</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">city</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">role</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">actions</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {users?.map((user)=>(
                <tr key={user?.userID}>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.userID}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.userEmail}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.userPassword}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.firstName}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.lastName}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.gender}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.phone}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.city}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{user.userStatus}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-primary text-[23px] flex gap-5">
                    <Link to={`/admin/Users/editUser/${user.userID}`}><MdEdit/></Link>
                    <button onClick={()=>handleDelete(user.userID)}><CiTrash/></button>
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

export default Users;
