import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container px-6 py-6 lg:py-12 mx-auto'>
            <section class="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div class="w-full col-span-1 p-4 mx-auto mt-2 lg:col-span-8 xl:p-10 md:w-3/4 border border-fuchsia-700 rounded">
                    <h1 class="mb-4 text-3xl font-bold text-left text-fuchsia-700">Log in to your account</h1>
                    
                    <form class="pb-1 space-y-4">
                        <label class="block">
                            <span class="block mb-1 text-sm font-medium text-gray-900">Your Email</span>
                            <input class="bg-fuchsia-50 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="email" placeholder="email" required />
                        </label>
                        <label class="block">
                            <span class="block mb-1 text-sm font-medium text-gray-900">Your Password</span>
                            <input class="bg-fuchsia-5s0 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="password" placeholder="••••••••" required />
                        </label>
                        <input type="submit" class="btn btn-md bg-fuchsia-700 hover:bg-orange-700 w-1/2" value="Login" />
                    </form>

                    <div class="my-2 space-y-2">
                        <p class="text-xs text-gray-700">
                            Don't have an account?
                            <Link to="/signup" class=" text-fuchsia-800 font-medium hover:text-black">Create an account</Link>
                        </p>
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-4 mt-4 lg:mt-0">
                    <img
                        src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1669288821~exp=1669289421~hmac=feaa3cec8592d913b053a8c546d9ad5f0bbe9319827b378f33d3b3375054cab0"
                        alt="3 women looking at a laptop"
                        class="object-cover w-full h-64 min-h-full bg-gray-100"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
};

export default Login;