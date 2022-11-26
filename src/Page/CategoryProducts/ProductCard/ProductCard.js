import React from 'react';

const ProductCard = ({ product, setProductBooking }) => {

    const {
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
        <div className="overflow-hidden shadow-md rounded-md  w-full md:max-w-md m-auto">
            <div className="w-full block h-full">
                <img alt="" src={img} className="max-h-56 w-full " />

                {/* product other info */}
                <div className="bg-white w-full p-4">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-black text-xs font-medium">{postDate}</p>
                        <p className="text-black text-xs font-medium">Location: {location}</p>
                    </div>

                    <p className="text-gray-800  text-xl font-medium mb-2">{bookName}</p>
                    <p className="text-gray-600  font-md text-md">
                        {description?.length > 100 ? description.slice(0, 100) + '...' : description}
                    </p>
                    <p className=" text-fuchsia-700 mt-2 text-sm font-bold"> Original price: ${originalPrice}</p>
                    <p className=" text-fuchsia-700 text-sm font-bold">Resale price: ${resalePrice}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col justify-between font-semibold">
                            <p className="text-black text-sm font-medium">Condition: {condition}</p>
                            <p className="text-gray-800 text-xs ">Years of use: {yearsOfUse} years</p>
                            
                        </div>

                        <div className="flex flex-col justify-between ml-4 text-sm">
                            <p className="text-black text-sm font-medium">Contact info:</p>
                            <p className="text-gray-800 ">{seller}</p>
                            <p className="text-gray-600 ">{email}</p>
                            <p className="text-gray-600 ">{phone}</p>
                        </div>
                    </div>
                    <div className=' mt-3'>
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setProductBooking(product) }
                            className="w-full btn px-6 font-semibold  text-sm text-white uppercase  bg-fuchsia-700 rounded-md hover:bg-stone-600 focus:outline-none focus:bg-purple-500"
                        >Book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;