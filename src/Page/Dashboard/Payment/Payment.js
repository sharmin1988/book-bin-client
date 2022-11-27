import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../../Components/Title';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useBuyer from '../../../hooks/useBuyer';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_stripePk);

const Payment = () => {
    const booking = useLoaderData()
    const {user} = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)
    const {bookName, resalePrice} = booking

    if(isBuyer){
        return (
        <div>
            <Title>Payment</Title>
            <h2 className='text-lg font-semibold'>You have to pay <strong>${resalePrice}</strong> for your <span className=' text-fuchsia-600'>{bookName}</span> book</h2>

            <div className='w-1/2 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking = {booking}
                    />
                </Elements>
            </div>

        </div>
    );
    }
    
};

export default Payment;