import FoodCart from "../../../Component/FoodCart/FoodCart";


const OrderTabs = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                items.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderTabs;