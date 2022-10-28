import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";


const Slider = ({ spot }) => {

    const { img, name } = spot;
    console.log(img)
    return (
        <div>
            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        </div>
    );
};

export default Slider;