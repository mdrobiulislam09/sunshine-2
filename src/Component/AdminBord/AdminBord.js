import React from 'react';
import { Link } from 'react-router-dom';

const AdminBord = () => {
    return (
        <div className='mx-5 fw-bold'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='p-2'><Link to='/dashbord/myorder'>My Order</Link></div>
            <div className='p-2'><Link to='/dashbord/user'>All User</Link></div>
        </div>
    );
};

export default AdminBord;