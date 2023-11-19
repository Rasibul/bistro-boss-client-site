import bgImg from "../../../assets/menu/banner3.jpg"
import './cover.css'

import { Parallax } from 'react-parallax';
const Cover = () => {
    return (
        <section className="mb-12">
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={bgImg}
                bgImageAlt="menu cover"
                strength={-200}
            >
                <div className="hero h-[500px] cover-img">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Our Menu</h1>
                            <p className="mb-5">Would you like to try a dish?</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>

    );
};

export default Cover;