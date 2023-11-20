import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menus/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                },
                {
                    path:'order/:category',
                    element: <OrderFood></OrderFood>
                }
            ]

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
])

export default route