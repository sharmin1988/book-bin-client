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

    const { data: products, isLoading } = useQuery({
        queryKey: ['categories', categoryId],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories/allProducts/${categoryId}`, {
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

    return (
        <div className='container px-8 py-6  mx-auto'>
            <Title>All Products</Title>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-24 '>
                {
                    products.map(product => <ProductCard
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