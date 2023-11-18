
const RecommendsMenu = ({ item }) => {
    const { image, recipe, name } = item || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#1F2937] text-[#BB8506]">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default RecommendsMenu;