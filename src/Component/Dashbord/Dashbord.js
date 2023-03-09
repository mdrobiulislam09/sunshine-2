import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminBord from '../AdminBord/AdminBord';

const Dashbord = () => {
    return (
        <div>
            <div className='d-flex container'>
                <AdminBord></AdminBord>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;