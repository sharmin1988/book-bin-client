import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AdvertiseCard = ({ product }) => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <div>
            <div data-aos="zoom-in-up" className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 " style={{ backgroundImage: `url(${product.img})` }}>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a href="/" className="px-3 py-2 text-sm font-semibold tracking-wider uppercase">{product.bookName}</a>
                    <div className="flex flex-col justify-start text-center ">
                        <span className="text-3xl font-semibold leading-none tracking-wide">${product.resalePrice}</span>
                        <span className="leading-none uppercase"></span>
                    </div>
                </div>
                <h2 className="z-10 p-5">
                    <Link to={`/categories/${product.categoryId}`} className="font-bold text-md text-white text-md hover:underline "> {product?.description?.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</Link>
                </h2>
            </div>

        </div>
    );
};

export default AdvertiseCard;