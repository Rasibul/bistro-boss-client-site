import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle";
import { axiosSecure } from "../../../Hooks/usaeAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";


const AllUser = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/users')
            return res.data
        }
    })
    const handelDelete = user => {
        
    }

    return (
        <div>
            <SectionTitle
                subHeading={"All User"}
                heading={"Manga All User"}
            ></SectionTitle>
            <div className="ml-6">
                <h2 className="text-2xl text-center mb-2 font-bold">Total User: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index) =>  <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <button onClick={() => handelDelete(user)} className="btn btn-ghost btn-xs"><FaUsers></FaUsers></button>
                                    </td>
                                    <td>
                                         <button onClick={() => handelDelete(user)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;