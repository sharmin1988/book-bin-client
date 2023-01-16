import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Feedback = () => {

    const {user} = useContext(AuthContext)

    useEffect(() => {
        Aos.init({duration: 1500})
    },[])

    return (
        <section>
            <div className="max-w-6xl px-6 py-8 mx-auto">
                <main className="relative z-20 w-full mt-4 md:flex md:items-center xl:mt-8">
                    {/* For background box */}
                    <div data-aos="slide-left" className="absolute w-full bg-fuchsia-100 -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6 bg-fuchsia-200 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-around">

                        <img data-aos="flip-right" className="h-20 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[32rem] lg:w-[24rem] md:rounded-2xl" src="https://img.freepik.com/free-photo/feedback-word-written-with-chalk-paper-note_144627-24512.jpg?w=826&t=st=1673854759~exp=1673855359~hmac=8ec3b2769aea8f61b7d6a30ff90d5609b90ed9438d7252ee2f2797a1d38e5442" alt="" />

                        <div data-aos="slide-left" className="mt-2 md:mx-6 w-full md:w-4/5">
                            <div>
                                <p className="text-xl font-bold tracking-tight mb-2">Send us your thoughts ...</p>
                            </div>

                            <form  action="https://formspree.io/f/mnqynjql"
                                method="POST"
                                className="py-1 space-y-4 w-full">
                                <label className="block">
                                    <div className="flex relative ">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your email" value={user? user.email:'Please login First'} required />
                                    </div>

                                </label>

                                <label className="text-gray-700 block" for="name">
                                    <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="Book bin user feedback" rows="5" cols="40" required>
                                    </textarea>
                                </label>

                                <div className='text-center'>
                                    <input type="submit" className="btn btn-md bg-fuchsia-700 hover:bg-orange-700 w-1/2" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Feedback;