import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";


const Dashbord = () => {

    const isAdmin = true
    const [cart] = useCarts()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-red-600 text-white">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/boolings'>
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'>
                                    <FaUser></FaUser>
                                    All Users
                                </NavLink>
                            </li>

                        </>
                            :

                            <>
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
                            </>
                    }
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
                    <li>
                        <NavLink to='/contact'>
                            <FaEnvelope></FaEnvelope>
                            Contact
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