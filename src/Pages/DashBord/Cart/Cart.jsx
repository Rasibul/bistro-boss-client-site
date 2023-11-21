import { FaTrash } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";


const Cart = () => {
    const [cart] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total price: $ {totalPrice}</h2>
                <button className="btn bg-red-500 px-6">Pay</button>
            </div>
            <div className="overflow-x-auto mt-4 ml-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index) => <tr key={item._id}>
                                <th>
                                   {index}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2>{item.name}</h2>
                                </td>
                                <td>$ {item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;