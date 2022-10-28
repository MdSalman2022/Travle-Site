import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Pages/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='layout h-screen'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;