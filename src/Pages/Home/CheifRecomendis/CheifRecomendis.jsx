import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle";
import RecommendsMenu from "../RecommendsMenu/recommendsMenu";
const CheifRecomendis = () => {
    const [recommends, setRecommends] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommendsItem = data.filter(item => item.category === 'salad')
                setRecommends(recommendsItem)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    recommends.map(item => <RecommendsMenu key={item._id} item={item}></RecommendsMenu>)
                }
            </div>
        </section>
    );
};

export default CheifRecomendis;