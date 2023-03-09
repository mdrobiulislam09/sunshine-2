import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CatagoryProduct from '../CatagoryProduct/CatagoryProduct';

const Product = () => {
    const [phone, setPhone] = useState(null)
    const [date, setDate]= useState(new Date())


    const products = useLoaderData()
    console.log(products)

    return (
        <div>
            <div className='row row-cols-md-3 mx-auto'>
                {
                    products.map(n => <CatagoryProduct
                        key={n._id}
                        n={n}
                        setPhone={setPhone}
                        setDate={setDate}
                    ></CatagoryProduct>)
                }
            </div>
            {
                phone &&
                <BookingModal
                    phone={phone}
                    date={date}
                    setPhone={setPhone}
                ></BookingModal>
            }
        </div>
    );
};

export default Product;