import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover></Cover>
            <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Menu;