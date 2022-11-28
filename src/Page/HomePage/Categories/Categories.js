import React, { useEffect, useState } from 'react';
import Title from '../../../Components/Title';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://book-bin-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container px-8 mx-auto'>
            <Title>All Categories</Title>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 w-4/5 mx-auto'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;