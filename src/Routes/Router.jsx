import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            }
        ]
    }
])
export default router;