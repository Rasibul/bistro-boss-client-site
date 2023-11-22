import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menus/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Dashbord from "../LayOut/Dashbord";
import Cart from "../Pages/DashBord/Cart/Cart";
import AllUser from "../Pages/DashBord/AllUser/AllUser";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <PrivateRoute>
                    <OrderFood></OrderFood>
                </PrivateRoute>
            }
        ]

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path:'users',
                element:<AllUser></AllUser>
            }
        ]
    }
])

export default route