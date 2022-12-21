import React from 'react';
import Title from '../../../Components/Title';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: products, isLoading} = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch('https://book-bin-server.vercel.app/allProducts', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    const adProducts = products.filter(p => p.advertise && !p.isSold)

    if (adProducts.length > 0) {
        return (
            <div className='container px-4 lg:px-8 py-6 lg:py-12'>
                <Title>Advertise</Title>
                <div className="max-w-screen-xl p-5 mx-auto  text-gray-100">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                        {
                            adProducts?.map(product => <AdvertiseCard
                                key={product._id}
                                product={product}
                            ></AdvertiseCard>
                            )
                        }
                    </div>
                </div>

            </div>
        );
    }


};

export default Advertise;