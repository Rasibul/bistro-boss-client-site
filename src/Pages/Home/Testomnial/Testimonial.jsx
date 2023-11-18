import SectionTitle from "../../../Component/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'



const Testimonial = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-12">
                            <FaQuoteLeft className="text-6xl"></FaQuoteLeft>
                            <Rating className="py-4"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                            />
                            <p className="py-8">{review.details}</p>
                            <h2 className="text-2xl text-orange-500">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;