import React from 'react';
import Title from '../../../../Components/Title';

const AddProduct = () => {
    return (
        <div>
            <Title>Add your product for sell !!</Title>
            <div className='my-4'>
                <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-fuchsia-300">

                    <form>
                        <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Seller Name</label>
                                <input type="text"
                                    disabled
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-gray-100 border border-fuchsia-300 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            
                            <div>
                                <label class="text-xs font-medium text-gray-900 " >Email </label>
                                <input type="email"
                                    disabled
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-gray-100 border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 " >Date</label>
                                <input type="text"
                                    disabled
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-gray-100 border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 " >Contact number</label>
                                <input type="text"
                                    class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="block">
                                    <span className="block mb-1 text-xs font-medium text-gray-900">Select product category</span>
                                    <select className="select select-bordered border-fuchsia-700 w-full">
                                        <option value="1">Kids Book</option>
                                        <option value="2">Romance</option>
                                        <option value="3">Fiction</option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Product name</label>
                                <input type="text" 
                                class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Location</label>
                                <input type="text" 
                                class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Original price</label>
                                <input type="text" 
                                class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Resale price</label>
                                <input type="text" 
                                class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Years of use</label>
                                <input type="text" 
                                class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Condition</label>
                                <select className="select select-bordered border-fuchsia-700 w-full">
                                        <option value="fair">Fair</option>
                                        <option value="good">Good</option>
                                        <option value="excellent">Excellent</option>
                                    </select>
                            </div>
                            <div>
                                <label class="text-xs font-medium text-gray-900 ">Description</label>
                                <input type="text" 
                                class="block w-full px-4 py-1 mt-1 text-gray-700 bg-white border border-fuchsia-300  rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-xs font-medium text-gray-900">Product image</label>
                                <input type="file" className=" bordered mt-1 file-input-info w-full max-w-md" />
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