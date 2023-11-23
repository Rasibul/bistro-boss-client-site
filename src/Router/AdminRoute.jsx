import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }


    if (user && isAdmin) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default AdminRoute;