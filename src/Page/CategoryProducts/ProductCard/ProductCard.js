import React from 'react';
import toast from 'react-hot-toast';

const ProductCard = ({ product, setProductBooking }) => {

    const { _id,
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
        email,
        sellerVerified } = product

    const reportProduct = {
        productId: _id,
        img,
        resalePrice,
        bookName,
        seller,
        email
    }

    const handelReport = () => {
        const proceed = window.confirm('Are you sure you want to report this product to the admin!!!')
        if (proceed) {
            fetch(`http://localhost:5000/report`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(reportProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        setProductBooking(null);
                        toast.success('Report Done!!!!')
                    }
                    else {
                        toast.error(data.message)
                    }
                })
        }
    }

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
                            <div>
                                {
                                    sellerVerified ? <>
                                        <div className='flex items-center justify-evenly '>
                                            <img className='h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/811/811868.png" alt="" />
                                            <p className="text-gray-800 ">{seller}</p>
                                        </div>
                                    </>
                                        : <p className="text-gray-800 ">{seller}</p>
                                }
                            </div>
                            <p className="text-gray-600 ">{email}</p>
                            <p className="text-gray-600 ">{phone}</p>
                        </div>
                    </div>
                    <div className='flex justify-around mt-3'>
                        <button onClick={handelReport} className='btn btn-outline'>Report to admin</button>
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setProductBooking(product)}
                            className=" btn w-1/2 px-6 font-semibold  text-sm text-white uppercase  bg-fuchsia-700 rounded-md hover:bg-stone-600 focus:outline-none focus:bg-purple-500"
                        >Book now</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;