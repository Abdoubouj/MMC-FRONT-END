import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserLayout from "../UserLayout/UserLayout";
import Events from "../Events/Events";
import Speakers from "../Speakers/Speakers";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EventDetails from "../Events/EventDetails";
import AdminLayout from "../AdminLayout/AdminLayout";
import NotFound from "../NotFound/NotFound";

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
        {path:"",element:"events"}
    ]}
]
)