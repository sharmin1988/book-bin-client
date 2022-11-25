import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../../Components/Title';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {
    const products = useLoaderData()
   
    return (
        <div className='container px-8 py-6  mx-auto'>
            <Title>All Products in {products[0]?.category}  category</Title>
            <div className='mt-6'>
            {
                products.map(product => <ProductCard
                key={product._id}
                product = {product}
                ></ProductCard>)
            }
            </div>
        </div>
    );
};

export default AllProducts;