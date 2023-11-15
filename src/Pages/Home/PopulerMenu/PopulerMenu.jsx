import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopulerMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const populerItem = data.filter(item =>item.category === 'popular')  
            setMenu(populerItem)
        })
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"Cheak It Out"}
            heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;