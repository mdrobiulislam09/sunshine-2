import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const { price, email, buyerName, _id } = booking;

    const [clientSecret, setClientSecret] = useState("");

    const [procced, setProceed] = useState(false);

    const [success, setSuccess] = useState("");

    const [confirmId, setConfirmId] = useState("");

    const [cardError, setCardError] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('https://sunshine-2-server.vercel.app/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setSuccess('')
        setProceed(true)
        const { paymentIntent, erro: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        console.log('paymentInten:', paymentIntent);

        if (paymentIntent.status === 'succeeded') {


            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }

            fetch('https://sunshine-2-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Your Payment Complete');
                        setConfirmId(paymentMethod.id);
                        setProceed(false);
                    }
                })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary mt-3' type="submit" disabled={!stripe || !clientSecret || procced}>
                    Pay
                </button>
            </form>
            <p className='text-danger'>{cardError}</p>
            {
                success && <div>
                    <p className='text-success'>{success}</p>
                    <p className='text-info'>Your TransactionID: <span className='text-danger fw-bold'>{confirmId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;