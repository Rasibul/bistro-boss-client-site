import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";

const route = createBrowserRouter([
        {
            path:'/',
            element:<MainLayOut></MainLayOut>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]

        }
])

export default route