import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./usaeAxiosSecure";
import useAuth from "./useAuth";


const useCarts = () => {
    const {user} = useAuth()
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/carts?email=${user.email}`)
            return res.data
        }
    })
    return[cart,refetch]
};

export default useCarts;