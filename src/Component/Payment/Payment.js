import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51MjQaYCS0nFd3xJnqm8dwbwrXP97EVtX1gCP3tSJgD2WjTLoKxaD3wcepmi58cHnVZrclHP4x9sXgAHTxykmmZmS00SvjtB4s9');
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const { email, mobileModel, price } =booking;
    console.log(email)
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                Payment for <span className='fw-bold text-primary'>{mobileModel}</span> ammount is <span className='fw-bold text-danger'> ${price}</span>.
            </div>
            <div className='w-96 my-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;