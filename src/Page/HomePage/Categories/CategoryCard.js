import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CategoryCard = ({ category }) => {
    const { categoryId, title, image } = category

    useEffect(() => {
        Aos.init({duration: 1500})
    },[])

    return (
        <Link to={`/categories/${categoryId}`}>
            <div data-aos="fade-up" className="overflow-hidden bg-no-repeat bg-cover max-w-sm rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${image})` }}>
                <div
                    className="flex flex-col justify-center w-full max-w-xs h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-bold  text-white capitalize">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;