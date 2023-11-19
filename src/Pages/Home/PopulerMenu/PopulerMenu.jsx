import SectionTitle from "../../../Component/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopulerMenu = () => {
    const [menu] = useMenu()
    const populerItem = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Cheak It Out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    populerItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="mt-10 text-center">
                <button className="btn btn-outline border-0 border-b-2 rounded-md border-orange-500 py-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopulerMenu;