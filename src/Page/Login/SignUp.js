import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if(token){
        return navigate('/')
    }

    const handelSignUp = data => {
        // console.log(data)
        setSignUPError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                
                //--------- update user name field --------
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserInDb(data.name, data.email, data.role)    
                    })
                    .catch(err => console.error(err));
            })
            .catch(error => {
                console.error(error)
                setSignUPError(error.message)
            })
    }

    const saveUserInDb = (name, email, role) => {
        const user = {
            name,
            email,
            role
        }

        fetch('https://book-bin-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCreatedUserEmail(email)
            })
    }

    return (
        <div className='container px-6 py-6 lg:py-12 mx-auto'>
            <section className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div className="w-full col-span-1 p-4 mx-auto mt-2 lg:col-span-8 xl:p-10 md:w-3/4 border border-fuchsia-700 rounded">
                    <h1 className="mb-4 text-3xl font-bold text-left text-fuchsia-700">Sign up to your new account</h1>

                    <form onSubmit={handleSubmit(handelSignUp)} className="pb-1 space-y-4">
                        <label className="block">
                            <span className="block mb-1 text-sm font-medium text-gray-900">Name</span>
                            <input
                                {...register("name", {
                                    required: "Name is Required"
                                })}
                                className="bg-fuchsia-50 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="text" placeholder="name" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </label>

                        <label className="block">
                            <span className="block mb-1 text-sm font-medium text-gray-900">Select your role</span>
                            <select className="select select-bordered border-fuchsia-700 w-full" {...register("role")}>
                                <option value="buyer">buyer</option>
                                <option value="seller">seller</option>
                            </select>
                        </label>



                        <label className="block">
                            <span className="block mb-1 text-sm font-medium text-gray-900">Email</span>
                            <input
                                {...register("email", {
                                    required: true
                                })}
                                className="bg-fuchsia-50 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="email" placeholder="email" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </label>

                        <label className="block">
                            <span className="block mb-1 text-sm font-medium text-gray-900">Password</span>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                })}
                                className="bg-fuchsia-5s0 p-1 px-4 w-full rounded-md border border-fuchsia-700" type="password" placeholder="••••••••" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </label>
                        <input type="submit" className="btn btn-md bg-fuchsia-700 hover:bg-orange-700 w-1/2" value="Sign Up" />
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                    </form>

                    <div className="my-2 space-y-2">
                        <p className="text-xs text-gray-700">
                            Already have an account?
                            <Link to="/login" className=" text-fuchsia-800 font-medium hover:text-black">Login</Link>
                        </p>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-4 mt-4 lg:mt-0">
                    <img
                        src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1669289563~exp=1669290163~hmac=b5fef5ebb5325026a8d3ea65b5a459070f619baaddcf0ff23ada1294de2bfae0"
                        alt="3 women looking at a laptop"
                        className="object-cover w-full h-64 min-h-full bg-gray-100"
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
};

export default SignUp;