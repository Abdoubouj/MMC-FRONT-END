import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserLayout from "../UserLayout/UserLayout";
import Events from "../Events/Events";
import Speakers from "../Speakers/Speakers";

export const router = createBrowserRouter([
    {path:"/",element:<UserLayout/>,children:[
        {path:"" , element:<Home/>},
        {path:"Events" , element:<Events/>},
        {path:"Speakers" , element:<Speakers/>},
    ]}
]
)