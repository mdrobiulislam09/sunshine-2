import React from 'react';
import { Outlet } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';

const MainCatagory = () => {
    return (
        <div>
            <Catagory></Catagory>
            <Outlet></Outlet>
        </div>
    );
};

export default MainCatagory;