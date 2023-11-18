import Banner from "./Banner/Banner";
import Categeroy from "./Categeroy/Categeroy";
import CheifRecomendis from "./CheifRecomendis/CheifRecomendis";
import Contact from "./Contact/Contact";
import FetureItem from "./FetureItem/FetureItem";
import PopulerMenu from "./PopulerMenu/PopulerMenu";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categeroy></Categeroy>
           <PopulerMenu></PopulerMenu>
           <Contact></Contact>
           <CheifRecomendis></CheifRecomendis>
           <FetureItem></FetureItem>
        </div>
    );
};

export default Home;