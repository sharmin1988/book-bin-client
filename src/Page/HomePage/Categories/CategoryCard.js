import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
        <Link to = '/'>
            <div class="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border hover:border-fuchsia-600 mb-6 lg:mb-0">
                <div class="px-4 py-2">
                    <h1 class="text-xl font-bold text-gray-800 uppercase ">{category.title}</h1>
                </div>

                <img class="w-full object-fill h-64 mt-2" src={category.image} alt="/"/>
            </div>
        </Link>
    );
};

export default CategoryCard;