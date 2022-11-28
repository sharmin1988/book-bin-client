import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { resalePrice, buyerName, email, _id, productId } = booking
    const stripe = useStripe()
    const elements = useElements()


    useEffect(() => {
        fetch("https://book-bin-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
            return
        }
        else {
            setCardError('')
        }

        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
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
            console.log(confirmError)
            setCardError(confirmError.message)
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price: resalePrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://book-bin-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        console.log(productId)
                        fetch(`https://book-bin-server.vercel.app/payments/${productId}`, {
                            method: 'PUT',
                            headers: {
                                authorization: `bearer ${localStorage.getItem('accessToken')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.modifiedCount) {
                                    toast.success('Payment successfully done!!!')
                                    setSuccess('Thank you for your payment!!!')
                                    setTransactionId(paymentIntent.id)
                                }
                            })
                    }
                })

        }
        setProcessing(false)
    }

    return (
        <>
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
                <button
                    className='mt-4 btn btn-sm btn-outline bg-pink-400'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            <p className='text-sm text-red-600 font-semibold mt-3'>{cardError}</p>
            {
                success && <div>
                    <p className='mt-3 text-green-600 font-semibold'>{success}</p>
                    <p className='mt-2  font-semibold'>Your transaction Id: {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;