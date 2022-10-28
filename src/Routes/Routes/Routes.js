import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Pages/Blog/Blog';
import Contact from '../../components/Pages/Contact/Contact';
import Destination from '../../components/Pages/Destination/Destination';
import Home from '../../components/Pages/Home/Home';
import Main from '../../layout/Main';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch("http://localhost:5000/spotlist"),
                element: <Home></Home>,
            },
            {
                path: '/home',
                loader: () => fetch("http://localhost:5000/spotlist"),
                element: <Home></Home>,
            },
            {
                path: '/destination/',
                loader: ({ params }) => fetch(`http://localhost:5000/spotlist/`),
                element: <Destination></Destination>,
            },
            {
                path: '/destination/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/spotlist/${params.id}`),
                element: <Destination></Destination>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

        ]
    }
])