import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../Components/PrimaryBtn';

const Banner = () => {
    return (
        <header className="bg-white ">
            <div className="container px-6 py-6 lg:py-12 mx-auto">
                <div className="items-center lg:flex">
                    <div className="flex items-center lg:justify-start justify-center  w-full mt-6 lg:mt-0 lg:w-1/2 ">
                        <img className="w-full h-full lg:max-w-lg rounded lg:pl-6" src="https://img.freepik.com/free-photo/top-view-books-arrangement_23-2148882754.jpg?w=1060&t=st=1669283710~exp=1669284310~hmac=d80d424ddd6aa2395a67d9e28d9b7c1f264615d19c5ef33466232707fe61d471" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-3 lg:mt-0">
                        <div className="lg:max-w-xl">
                            <h1 className="text-2xl font-bold text-gray-800 lg:text-5xl">Best Place To sell / buy Your <span className=' text-fuchsia-700'>used Books</span> !!</h1>

                            <p className="my-4 text-gray-600 dark:text-gray-400">We've been selling cheap used books since 2012. Discover gently used books for sale from sellers around the world. By shopping for used items, you can save money, be sustainable, support independent booksellers, and find great books to read</p>

                            <Link to='/'><PrimaryBtn>Explore more</PrimaryBtn></Link>
                        </div>
                    </div>


                </div>
            </div>
        </header >
    );
};

export default Banner;