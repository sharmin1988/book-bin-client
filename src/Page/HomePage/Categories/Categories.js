import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('catrgory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container px-6 py-6  mx-auto'>
            <h2 className='text-3xl font-bold text-fuchsia-700 '>All Categories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap 4 mt-6'>
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