import { Link } from "react-router-dom";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";


const MenuCategory = ({ items, title, img }) => {
    return (
        <section className="mb-12">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="mt-10 text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-2 rounded-md border-black py-2">Order Your Favourite Food</button>
                </Link>
            </div>
        </section>
    );
};

export default MenuCategory;