import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <section className="mb-12">
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="menu cover"
                strength={-200}
            >
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" bg-[#15151599] py-20 px-36">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">Would you like to try a dish?</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>

    );
};

export default Cover;