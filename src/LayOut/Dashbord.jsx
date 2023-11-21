import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";


const Dashbord = () => {
    const [cart] = useCarts()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-red-600">
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservison'>
                            <FaCalendar></FaCalendar>
                            Reservison
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Ad A Reveiw
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList></FaList>
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                             Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                             Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;