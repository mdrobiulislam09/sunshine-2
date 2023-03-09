import React, { useEffect, useState } from 'react';
import Catagoeies from '../Catagoeies/Catagoeies';
import './Catagory.css';

const Catagory = () => {

    // const [loading, setloading] = useState(false)
    const [catagori, setCatagory] = useState([]);

    useEffect(() => {
        // setloading(true)
        fetch('https://sunshine-2-server.vercel.app//products')
            .then(res => res.json())
            .then(data => {
                setCatagory(data)
                // setloading(false)
            })
    }, [])

    return (
        <div  className='d-flex justify-content-center g-5 bgc'>
            {
                    catagori.map(product => <Catagoeies
                        key={product._id}
                        product={product}
                    ></Catagoeies>)
            }
        </div>
    );
};

export default Catagory;