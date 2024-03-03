import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserLayout from "../UserLayout/UserLayout";
import Events from "../Events/Events";
import Events2 from "../Admin/events/Events";
import Speakers from "../Speakers/Speakers";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EventDetails from "../Events/EventDetails";
import NotFound from "../NotFound/NotFound";
import AdminLayout from "../Admin/AdminLayout/AdminLayout";
import AddEvent from "../Admin/events/AddEvent";
import EditEvent from "../Admin/events/EditEvent";
import Sessions from "../Admin/sessions/Sessions";
import AddSession from "../Admin/sessions/AddSession";
import EditSession from "../Admin/sessions/EditSession";
import Users from "../Admin/users/Users";
import AddUser from "../Admin/users/AddUser";
import EditUser from "../Admin/users/EditUser";
import Speakers2 from "../Admin/speakers/Speakers";
import AddSpeaker from "../Admin/speakers/AddSpeaker";
import EditSpeaker from "../Admin/speakers/EditSpeaker";

const isAuth = localStorage.getItem("token");
const {role} = JSON.parse(localStorage.getItem("user")) || {};
// console.log(isAuth ? "exist":"null");
export const router = createBrowserRouter([
    {path:"/",element:<UserLayout role={role}/>,children:[
        {path:"" , element:<Home/>},
        {path:"Events" , element:<Events/>},
        {path:"Events/:id" , element:<EventDetails/>},
        {path:"Speakers" , element:<Speakers/>},
    ]},
    {path:"*",element:<NotFound/>},
    {path:"/Login" , element:<Login/>},
    {path:"/Register" , element:<Register/>},
    {path:"/admin",element:isAuth && role === "admin" ? <AdminLayout/>:<NotFound/>,children:[
        {path:"Dashboard",element:"events"},
        {path:"Events",element:isAuth && role === "admin" ? <Events2/> : <NotFound/>},
        {path:"Events/AddEvent",element:<AddEvent/>},
        {path:"Events/editEvent/:id",element:<EditEvent/>},
        {path:"Sessions",element:isAuth && role === "admin" ? <Sessions/> : <NotFound/>},
        {path:"Sessions/AddSession",element:<AddSession/>},
        {path:"Sessions/editSession/:id",element:<EditSession/>},
        {path:"Users",element:<Users/>},
        {path:"Users/AddUser",element:<AddUser/>},
        {path:"Users/editUser/:id" , element:<EditUser/>},
        {path:"Speakers",element:<Speakers2/>},
        {path:"Speakers/AddSpeaker",element:<AddSpeaker/>},
        {path:"Speakers/editSpeaker/:id",element:<EditSpeaker/>},
    ]},
]
)






