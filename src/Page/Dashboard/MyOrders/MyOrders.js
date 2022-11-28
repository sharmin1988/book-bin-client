import React, { useContext } from 'react';
import Title from '../../../Components/Title';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import useBuyer from '../../../hooks/useBuyer';
import { Link, useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    // const allProductsInDb = useLoaderData()
    const { email } = user
    const [isBuyer] = useBuyer(email)

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    

    return (
        <div>
            <Title>my orders {bookings?.length}</Title>

            {
                isBuyer && <> <div className="overflow-x-auto w-full mt-8">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead >
                            <tr >
                                <th></th>
                                <th>image</th>
                                <th>Book Name</th>
                                <th>Price</th>
                                <th>Sale Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, i) => <tr
                                    key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.img} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.bookName}</td>
                                    <td>${booking.resalePrice}</td>
                                    <td>
                                    {
                                            booking.paid ?
                                                <p className='text-sm font-bold text-red-600'>Sold</p>
                                                : <p className='text-sm font-bold text-green-600'>Sold</p>
                                                
                                        }

                                    </td>
                                    <th>
                                        {
                                            booking.paid ?
                                                <p className='text-sm font-bold text-green-600'>Payment Done</p>
                                                : 
                                                <Link to={`/dashboard/buyer/myProducts/payment/${booking._id}`}>
                                                <button className="btn bg-fuchsia-700 text-white btn-xs"
                                                >Payment</button>
                                                </Link>
                                        }

                                    </th>
                                    {/* <th>
                                        <label htmlFor="my-modal"
                                            // onClick={() => handelDelete(booking._id)}
                                            className="btn btn-error bg-red-600 text-white btn-xs">Delete</label>
                                    </th> */}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                    {/* {advertise && <CustomModal
                        title={'Are you sure u want to display Advertise??'}
                        message={'your booking is displayed Home Page. Go have a look!!!'}
                        closeModal={cancelAdvertise}
                        successAction={handelAdvertise}
                        modalData={advertise}
                        successActionBtnName={'Advertise'}
                    ></CustomModal>

                    } */}
                </>
            }

        </div>
    );
};

export default MyOrders;