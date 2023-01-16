import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonials = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    },[])

    return (
        <div className='container px-6 pb-3 mt-8 lg:pb-20 mx-auto'>
            <section className="bg-white">
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div className="hidden w-3/4 min-h-screen bg-fuchsia-200 rounded dark:bg-gray-800 lg:block"></div>

                    <div
                        className="container flex flex-col justify-center w-full min-h-screen px-6 py-5 mx-auto lg:absolute lg:inset-x-0">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl  dark:text-white">
                            What our <span className="text-fuchsia-700 font-bold">customers</span> <br /> are saying
                        </h1>

                        <div className="mt-10  lg:flex lg:items-center">
                            <img data-aos="fade-down-right" className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://img.freepik.com/free-photo/side-view-pleased-brunette-woman-eyeglasses-sitting-bench-reading-book-park_231208-8081.jpg?size=626&ext=jpg&ga=GA1.2.1239272833.1664376337&semt=sph" alt="" />

                            <div data-aos="fade-up-left" className="mt-8 lg:px-10 lg:mt-0">
                                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                    Help us improve our productivity in a pocket budget!!
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                    “ Great service! I ordered 3 copies of a book for my middle school book club. The books arrived promptly. Great price on the books, too! All around it was a win!.
                                    Very pleased with purchase. All the books came in great condition and fast. My grandson loves his new books.I'll be back!”
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Ronika Ederson</h3>
                                <p className="text-gray-600 dark:text-gray-300">Marketing student</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;