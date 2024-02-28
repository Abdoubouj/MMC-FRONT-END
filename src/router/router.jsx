import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserLayout from "../UserLayout/UserLayout";
import Events from "../Events/Events";
import Speakers from "../Speakers/Speakers";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EventDetails from "../Events/EventDetails";

export const router = createBrowserRouter([
    {path:"/",element:<UserLayout/>,children:[
        {path:"" , element:<Home/>},
        {path:"Events" , element:<Events/>},
        {path:"Events/:id" , element:<EventDetails/>},
        {path:"Speakers" , element:<Speakers/>},
    ]},
    {path:"/Login" , element:<Login/>},
    {path:"/Register" , element:<Register/>}
]
)