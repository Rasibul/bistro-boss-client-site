import Banner from "./Banner/Banner";
import Categeroy from "./Categeroy/Categeroy";
import Contact from "./Contact/Contact";
import PopulerMenu from "./PopulerMenu/PopulerMenu";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categeroy></Categeroy>
           <PopulerMenu></PopulerMenu>
           <Contact></Contact>
        </div>
    );
};

export default Home;