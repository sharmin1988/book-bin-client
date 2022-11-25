import React from 'react';

const ProductCard = ({ product }) => {

    const { _id,
        category,
        bookName,
        img,
        postDate,
        location,
        originalPrice,
        resalePrice,
        yearsOfUse,
        condition,
        description,
        seller,
        phone,
        email } = product

    return (
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <div class="w-full block h-full">
                <img alt="" src={img} class="max-h-56 w-full " />

                {/* product other info */}
                <div class="bg-white w-full p-4">
                    <div class="flex items-center justify-between mb-2">
                        <p class="text-black text-xs font-medium">{postDate}</p>
                        <p class="text-black text-xs font-medium">Location: {location}</p>
                    </div>

                    <p class="text-gray-800  text-xl font-medium mb-2">{bookName}</p>
                    <p class="text-gray-600  font-md text-md">
                        {description?.length > 100 ? description.slice(0, 100) + '...' : description}
                    </p>
                    <p class=" text-fuchsia-700 mt-2 text-sm font-bold"> Original price: ${originalPrice}</p>
                    <p class=" text-fuchsia-700 text-sm font-bold">Resale price: ${resalePrice}</p>

                    <div class="flex items-center justify-between">
                        <div class="flex flex-col justify-between font-semibold">
                            <p class="text-black text-sm font-medium">Condition: {condition}</p>
                            <p class="text-gray-800 text-xs ">Years of use: {yearsOfUse} years</p>
                            <p class="text-gray-800  text-xs">Category: {category}</p>
                        </div>

                        <div class="flex flex-col justify-between ml-4 text-sm">
                            <p class="text-black text-sm font-medium">Contact info:</p>
                            <p class="text-gray-800 ">{seller}</p>
                            <p class="text-gray-600 ">{email}</p>
                            <p class="text-gray-600 ">{phone}</p>
                        </div>
                    </div>
                    <div className=' my-3'>
                        <button className="w-full  px-6 font-semibold  text-sm text-white uppercase  bg-fuchsia-700 rounded-md hover:bg-stone-600 btn focus:outline-none focus:bg-purple-500">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;