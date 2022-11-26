import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../../Components/Title';
import BookingModal from '../Bookingmodal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {
    const products = useLoaderData()
    const [productBooking, setProductBooking] = useState(null)

    

    return (
        <div className='container px-8 py-6  mx-auto'>
            <Title>All Products in {products[0]?.category}  category</Title>
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
                    setProductBooking= {setProductBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default AllProducts;