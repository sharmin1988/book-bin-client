import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../../Components/Title';
import Loader from '../../Shared/Loader/Loader';
import BookingModal from '../Bookingmodal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {
    const category = useLoaderData()
    const { categoryId } = category
    const [productBooking, setProductBooking] = useState(null)

    const { data: allProducts, isLoading } = useQuery({
        queryKey: ['categories', categoryId],
        queryFn: async () => {
            const res = await fetch(`https://book-bin-server.vercel.app/categories/allProducts/${categoryId}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <div className='flex justify-center'>
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded bg-gray-700"></div>
                </div>
            </div>
        </div>
    }


    return (
        <div className='container px-8 py-10  mx-auto'>
            <Title>All Products</Title>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-24 '>
                {
                    allProducts?.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProductBooking={setProductBooking}
                    ></ProductCard>)
                }
            </div>
            {
                productBooking &&
                <BookingModal
                    productBooking={productBooking}
                    setProductBooking={setProductBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default AllProducts;