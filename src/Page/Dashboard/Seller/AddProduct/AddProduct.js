import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Title from '../../../../Components/Title';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const imgbbHostkey = process.env.REACT_APP_imgbbKey
    const navigate = useNavigate()

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelAddProduct = data => {
        // console.log(data)

        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostkey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imageUrl = imgData.data.url;

                    // destructuring input field data
                    const { categoryId, bookName, location, originalPrice, resalePrice, yearsOfUse, condition, description, phone } = data

                    const product = {
                        categoryId,
                        bookName,
                        location,
                        originalPrice,
                        resalePrice,
                        yearsOfUse,
                        condition,
                        description,
                        phone,
                        img: imageUrl,
                        seller: user?.displayName,
                        email: user?.email,
                        postDate: date
                    }
                    console.log(product)

                    // save product in dataBase
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.acknowledged){
                                toast.success('product successfully added')
                                navigate('/dashboard/seller/myProducts')
                            }
                        })
                }
            })
    }

    return (
        <div>
            <Title>Add your product for sell !!</Title>
            <div className='my-4'>
                <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-fuchsia-300">

                    <form onSubmit={handleSubmit(handelAddProduct)}>
                        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Seller Name</label>
                                <input type="text"
                                    disabled
                                    defaultValue={user?.displayName}
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-gray-100 border border-fuchsia-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-xs font-medium text-gray-900 " >Email </label>
                                <input type="email"
                                    disabled
                                    defaultValue={user?.email}
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-gray-100 border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 " >Date</label>
                                <input type="text"
                                    disabled
                                    defaultValue={date}
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-gray-100 border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-xs font-medium text-gray-900 " >Contact number</label>
                                <input type="text"
                                    {...register("phone")}
                                    required
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            {/*------------------------ Product info add fields ----------------------------------*/}
                            <div>
                                <label className="block">
                                    <span className="block mb-1 text-xs font-medium text-gray-900">Select product category</span>
                                    <select
                                        {...register("categoryId")}
                                        required
                                        className="select select-bordered border-fuchsia-700 w-full">
                                        <option value="1">Kids Book</option>
                                        <option value="2">Romance</option>
                                        <option value="3">Fiction</option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Product name</label>
                                <input
                                    {...register("bookName")}
                                    required
                                    type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Location</label>
                                <input
                                    {...register("location")}
                                    required
                                    type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Original price</label>
                                <input
                                    {...register("originalPrice")}
                                    required
                                    type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Resale price</label>
                                <input
                                    {...register("resalePrice")}
                                    required
                                    type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Years of use</label>
                                <input
                                    {...register("yearsOfUse")}
                                    required
                                    type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Condition</label>
                                <select
                                    {...register("condition")}
                                    required
                                    className="select select-bordered border-fuchsia-700 w-full">
                                    <option value="fair">Fair</option>
                                    <option value="good">Good</option>
                                    <option value="excellent">Excellent</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Description</label>
                                <input
                                    {...register("description")}
                                    required
                                    type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-xs font-medium text-gray-900">Product image</label>
                                <input
                                    {...register("img")}
                                    required
                                    type="file" className=" bordered mt-1 file-input-info w-full max-w-md" />
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddProduct;