import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Order from '../Order/Order';
import './MyOrder.css'

const MyOrder = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                
            })
    }, [])

    const handleDelete = id => {
        const procced = window.confirm('Are you sure want to delete this product')
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if(data.deletedCount >= 0){
                //     const remaining = bookings.filter(books => books._id !== id)
                //     setBooked(remaining)
                // }
            })
        }
    }
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className=''>
                <table className="table table-striped sizer">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Prize</th>
                            <th scope="col">email</th>
                            <th scope="col">Pay Now</th>
                            <th scope="col">Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((book, i) => <Order
                                key={book._id}
                              book={book}
                              i={i}
                              handleDelete={handleDelete}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;