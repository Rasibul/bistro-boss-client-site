import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useCarts from "../../Hooks/useCarts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCart = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const { image, recipe, name, price, _id } = item || {}
    const { user } = useAuth()
    const [, refetch] = useCarts()
    const handelToCart = () => {
        const menuCart = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
        }
        axiosSecure.post('/api/v1/carts', menuCart)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to cart`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                    refetch()
                }
            })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <p className="text-white bg-slate-900 absolute  px-2  ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handelToCart} className="btn bg-[#1F2937] text-[#BB8506]">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;