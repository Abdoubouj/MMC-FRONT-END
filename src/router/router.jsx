import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import UserLayout from "../UserLayout/UserLayout";
import Events from "../Events/Events";

export const router = createBrowserRouter([
    {path:"/",element:<UserLayout/>,children:[
        {path:"" , element:<Home/>},
        {path:"Events" , element:<Events/>},
    ]}
]
)