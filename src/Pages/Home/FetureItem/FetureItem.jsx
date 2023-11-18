import SectionTitle from "../../../Component/SectionTitle";
import fetureImg from "../../../assets/home/featured.jpg"
import "./fetureItem.css"

const FetureItem = () => {
    return (
        <div className="mb-12 feture-item bg-fixed text-white py-6">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
                <div className="flex justify-center items-center gap-5 flex-col lg:flex-row py-20 px-36 bg-slate-500 bg-opacity-40">
                    <img src={fetureImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-xl font-bold">November 18,2023!</h1>
                        <h2 className="text-xl font-bold uppercase te">What can I get Some?</h2>
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br />
                        consequatur consequuntur omnis ullam maxime tenetur</p>
                        <button className=" btn btn-outline border-0 border-b-2 rounded-md border-white  py-2">Read More</button>
                    </div>
                </div>
        </div>
    );
};

export default FetureItem;