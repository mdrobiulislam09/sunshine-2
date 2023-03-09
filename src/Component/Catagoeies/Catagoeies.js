import React from 'react';
import { Link } from 'react-router-dom';
import './Catagoeies.css';


const Catagoeies = ({product}) => {
    const {catagory} = product;
    return (
        <div className='m-3 mx-md-5 degaen text-uppercase'>
            <Link to ={`/product/${catagory}`}>{catagory}</Link>
        </div>
    );
};

export default Catagoeies;