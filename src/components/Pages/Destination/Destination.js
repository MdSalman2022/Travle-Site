import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import './Destination.css'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const Destination = () => {

    const spots = useLoaderData();
    return (
        <div className='hero bg-transparent '>
            <div className=" grid grid-cols-2 gap-4 justify-center mt-44 ">
                <div className='text-left text-white place-self-center'>
                    <h1 className="text-8xl font-bold font-family font-link tracking-wide para-font">Box Office News!</h1>
                    <p className="py-6 w-96 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white">Get Started <AiOutlineDoubleRight /></button>
                </div>
                <div className="slider mr-10">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "bg-primary",
                        }}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={3.3}
                        spaceBetween={30}
                        // centeredSlides={true}
                        grabCursor={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper text-primary carousel"
                        navigation={true}
                    >
                        {
                            spots.map(spot => <SwiperSlide className='carousel-item rounded-box'><img className=' rounded-3xl object-cover h-96' src={spot.img} alt="" /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>


        </div >
    );
};

export default Destination;