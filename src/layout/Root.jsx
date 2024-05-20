import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Root = () => {
    const location = useLocation();
    console.log(location);
    const islocation = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {islocation || <Navbar></Navbar>}
            <Outlet></Outlet>
            {islocation || <Footer></Footer>}
        </div>
    );
};

export default Root;