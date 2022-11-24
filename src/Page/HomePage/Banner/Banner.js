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

                            <p className="mt-2 text-gray-600 dark:text-gray-400">Here on Happy Toast, I share authentic foods. You Can enjoy the super healthy tasty foods, along with family ,favorites from around .My "moto" is <br /> "foods are prepared with attention, packaged with care and <br /> delivered with love" </p>

                            <Link to='/'><PrimaryBtn>Explore more</PrimaryBtn></Link>
                        </div>
                    </div>


                </div>
            </div>
        </header >
    );
};

export default Banner;