import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if(token){
        return navigate(from, { replace: true })
    }

    const handelLogin = data => {
        setLoginError('')
        
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user?.email)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div className='container px-6 py-6 lg:py-12 mx-auto'>
            <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div className="w-full col-span-1 p-4 mx-auto mt-2 lg:col-span-8 xl:p-10 md:w-3/4 border border-fuchsia-700 rounded">
                    <h1 className="mb-4 text-3xl font-bold text-left text-fuchsia-700">Log in to your account</h1>

                    <form onSubmit={handleSubmit(handelLogin)} className="pb-1 space-y-4">

                        <label className="block">
                            <span className="block mb-1 text-sm font-medium text-gray-900">Your Email</span>
                            <input
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="bg-fuchsia-50 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="email" placeholder="email" />
                            {errors.email && <p className='text-red-600 mt-1'>{errors.email?.message}</p>}
                        </label>


                        <label className="block">
                            <span className="block mb-1 text-sm font-medium text-gray-900">Password</span>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="bg-fuchsia-5s0 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="password" placeholder="••••••••" required />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </label>

                        <div className='text-center'>
                            <input type="submit" className="btn btn-md bg-fuchsia-700 hover:bg-orange-700 w-1/2" value="Login" />
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>

                    </form>
                    <div className='text-center my-4'>
                        <button className='btn btn-outline btn-secondary ml-4' >Or Login with Google</button>
                        <p className="my-2 text-xs text-gray-700">
                            Don't have an account?
                            <Link to="/signup" className=" text-fuchsia-800 font-medium hover:text-black">Create an account</Link>
                        </p>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-4 mt-4 lg:mt-0">
                    <img
                        src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1669288821~exp=1669289421~hmac=feaa3cec8592d913b053a8c546d9ad5f0bbe9319827b378f33d3b3375054cab0"
                        alt="3 women looking at a laptop"
                        className="object-cover w-full h-64 min-h-full bg-gray-100"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
};

export default Login;