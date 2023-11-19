import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Component/SectionTitle";
import bgImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu([])
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={bgImg} title="Our Menu"></Cover>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            {/* offere category */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert category */}
            <MenuCategory items={dessert} title='Dessert' img={dessertImg}></MenuCategory>
            {/* pizza category */}
            <MenuCategory items={pizza} title='Pizza' img={pizzaImg}></MenuCategory>
            {/* salad category */}
            <MenuCategory items={salad}title='Salad' img={saladImg}></MenuCategory>
            {/* soup category */}
            <MenuCategory items={soup} title='Soup' img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;