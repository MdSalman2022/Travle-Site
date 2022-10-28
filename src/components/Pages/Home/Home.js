import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import './Home.css'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const Home = () => {

    const spots = useLoaderData();

    // spots.map(spot => )

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState('')

    const handleHeader = (sname, descriptionm, id) => {
        setName(sname)
        setDescription(description)
        setId(id)
        console.log(sname);
    }

    return (
        <div className='hero bg-transparent '>
            <div className=" grid grid-cols-2 gap-4 justify-center mt-44 ">
                <div className='text-left text-white place-self-center lg:ml-64 '>
                    <h1 className="text-8xl font-bold font-family font-link tracking-wide para-font">{name ? name : 'Tourist Spots'}</h1>
                    <p className="py-6 w-full ">{description ? description : "It takes a lot to create a truly memorable holiday. Selecting a country to visit, choosing where to stay, what location to research,finding the restaurants and food you like.. That's where we come in. It is great to talk to someone who actually knows. Who has been there, stayed in the hotels, eaten in the restaurants."}</p>
                    <Link to={`/destination/${id}`}><button className="btn btn-primary text-white">See More <AiOutlineDoubleRight /></button></Link>
                </div>
                <div className="slider mr-10 ml-10">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "bg-primary",
                        }}
                        // autoplay={{
                        //     delay: 500,
                        //     disableOnInteraction: true,
                        // }}
                        slidesPerView={3.3}
                        spaceBetween={30}
                        // centeredSlides={true}
                        grabCursor={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper text-primary carousel"
                        navigation={true}
                    >
                        {
                            spots.map(spot =>
                                <div >
                                    <SwiperSlide className='carousel-item rounded-box '><img onClick={() => handleHeader(spot.name, spot.description, spot.id)} className=' rounded-3xl object-cover h-96' src={spot.img} alt="" /></SwiperSlide>
                                </div>
                            )
                        }
                    </Swiper>
                </div>
            </div>


        </div >
    );
};

export default Home;