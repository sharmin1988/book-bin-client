import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container px-6 py-6 lg:py-12 mx-auto'>
            <section class="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div class="w-full col-span-1 p-4 mx-auto mt-2 lg:col-span-8 xl:p-10 md:w-3/4 border border-fuchsia-700 rounded">
                    <h1 class="mb-4 text-3xl font-bold text-left text-fuchsia-700">Sign up to your new account</h1>
                    
                    <form class="pb-1 space-y-4">
                        <label class="block">
                            <span class="block mb-1 text-sm font-medium text-gray-900">Your Name</span>
                            <input class="bg-fuchsia-50 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="text" placeholder="name" required />
                        </label>
                        <label class="block">
                            <span class="block mb-1 text-sm font-medium text-gray-900">Your Email</span>
                            <input class="bg-fuchsia-50 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="email" placeholder="email" required />
                        </label>
                        <label class="block">
                            <span class="block mb-1 text-sm font-medium text-gray-900">Your Password</span>
                            <input class="bg-fuchsia-5s0 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="password" placeholder="••••••••" required />
                        </label>
                        <input type="submit" class="btn btn-md bg-fuchsia-700 hover:bg-orange-700 w-1/2" value="Sign Up" />
                    </form>

                    <div class="my-2 space-y-2">
                        <p class="text-xs text-gray-700">
                            Already have an account?
                            <Link to="/login" class=" text-fuchsia-800 font-medium hover:text-black">Login</Link>
                        </p>
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-4 mt-4 lg:mt-0">
                    <img
                        src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1669289563~exp=1669290163~hmac=b5fef5ebb5325026a8d3ea65b5a459070f619baaddcf0ff23ada1294de2bfae0"
                        alt="3 women looking at a laptop"
                        class="object-cover w-full h-64 min-h-full bg-gray-100"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
};

export default SignUp;