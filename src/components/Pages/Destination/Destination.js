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
import { Link, NavLink, useLoaderData } from 'react-router-dom';

// import { LockClosedIcon } from '@heroicons/react/20/solid'


const Destination = () => {

    const spots = useLoaderData();

    const { id, name, img, description } = spots;

    return (
        <div className='hero bg-transparent '>
            <div className=" grid grid-cols-2 gap-4 justify-center mt-44 ">
                <div className='text-left text-white place-self-center lg:ml-72 '>
                    <h1 className="text-8xl font-bold font-family font-link tracking-wide para-font">{name ? name : 'Tourist Spots'}</h1>
                    <p className="py-6 w-full ">{description ? description : "It takes a lot to create a truly memorable holiday. Selecting a country to visit, choosing where to stay, what location to research,finding the restaurants and food you like.. That's where we come in. It is great to talk to someone who actually knows. Who has been there, stayed in the hotels, eaten in the restaurants."}</p>
                    <Link to={`/destination/${id}`}><button className="btn btn-primary text-white">Book your hotel <AiOutlineDoubleRight /></button></Link>
                </div>
                <div className="slider mr-10 ml-32 bg-base-100 rounded-xl w-96">
                    <div className="flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md ">
                            <form className=" " action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className=" rounded-md shadow-sm">
                                    <div className='mb-2'>
                                        <label htmlFor="origin" className="sr-only">
                                            Origin
                                        </label>
                                        <input
                                            id="origin"
                                            name="origin"
                                            type="text"
                                            required
                                            className="relative block w-full appearance-none   rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Origin"
                                        />
                                    </div>
                                    <div className=' my-5'>
                                        <label htmlFor="destination" className="sr-only">
                                            Destination
                                        </label>
                                        <input
                                            id="destination"
                                            name="destination"
                                            type="text"
                                            required
                                            className="relative block w-full appearance-none   rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Destination"
                                            value={name ? name : ''}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-5  my-5">
                                        <div className=''>
                                            <label htmlFor="email-address" className="sr-only">
                                                From
                                            </label>
                                            <input
                                                id="email-address"
                                                name="to"
                                                type="date"
                                                required
                                                className="form-input relative block w-full appearance-none   rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="To"
                                            />
                                        </div>
                                        <div className=''>
                                            <label htmlFor="email-address" className="sr-only">
                                                From
                                            </label>
                                            <input
                                                id="email-address"
                                                name="to"
                                                type="date"
                                                required
                                                className="form-input relative block w-full appearance-none   rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="To"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                        </span>
                                        Start Booking
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Destination;