import React, { useContext } from 'react';
import Title from '../../../Components/Title';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { email } = user

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(data)
            return data
        }
    })

    if(isLoading){
        return <p>loading............</p>
    }

    return (
        <div>
            <Title>my orders {bookings?.length}</Title>
        </div>
    );
};

export default MyOrders;