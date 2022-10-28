import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo'

const Header = () => {
    return (
        <header className='sticky top-0 z-30'>
            <div className="navbar bg-transparent ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className="mx-5" to="/destination">Destination</NavLink></li>
                            <li><NavLink className="mx-5" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="mx-5" to="/contact">Contact</NavLink></li>
                            <Link className="mx-3 btn btn-neutral">Login</Link>
                            <Link className="mx-3 btn btn-neutral">Sign Up</Link>
                        </ul>
                    </div>
                    <div className="ml-5 w-20 rounded-full">
                        <Logo></Logo>
                    </div>
                </div>
                <div className="navbar-center w-96">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search" className="input placeholder-white text-white input-bordered bg-opacity-0 border-1 border-white border-opacity-75" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li><NavLink className="mx-5" to="/destination">Destination</NavLink></li>
                        <li><NavLink className="mx-5" to="/blog">Blog</NavLink></li>
                        <li><NavLink className="mx-5" to="/contact">Contact</NavLink></li>
                        <Link className="mx-3 btn btn-primary ">Login</Link>
                        <Link className="mx-3 btn btn-primary ">Sign Up</Link>
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;