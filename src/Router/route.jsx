import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menus/Menu/Menu";

const route = createBrowserRouter([
        {
            path:'/',
            element:<MainLayOut></MainLayOut>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'menu',
                    element:<Menu></Menu>
                }
            ]

        }
])

export default route