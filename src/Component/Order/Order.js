import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ book, i, handleDelete}) => {
    const { mobileModel, email, _id, price } = book;
    
    return (
            <tr>
                <th scope="row">{i + 1}</th>
                <td>{mobileModel}</td>
                <td>{price} $</td>
                <td>{email}</td>
                <td>
                    {
                        book.price && !book.paid && <Link to={`/dashbord/payment/${_id}`}><button className='btn btn-primary btn-sm'>pay</button></Link>
                    }
                    {
                        book.price && book.paid && <button className='btn btn-primary btn-sm'>paid</button>
                    }
                </td>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-danger btn-sm'>delete</button></td>
            </tr>
    );
};

export default Order;