import Banner from "./Banner/Banner";
import Categeroy from "./Categeroy/Categeroy";
import CheifRecomendis from "./CheifRecomendis/CheifRecomendis";
import Contact from "./Contact/Contact";
import FetureItem from "./FetureItem/FetureItem";
import PopulerMenu from "./PopulerMenu/PopulerMenu";
import Testimonial from "./Testomnial/Testimonial";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categeroy></Categeroy>
           <PopulerMenu></PopulerMenu>
           <Contact></Contact>
           <CheifRecomendis></CheifRecomendis>
           <FetureItem></FetureItem>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;