import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Title from '../../../../Components/Title';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import Loader from '../../../Shared/Loader/Loader';

const ReportedProducts = () => {
    const { user } = useContext(AuthContext)
    const { email } = user
    const [isAdmin] = useAdmin(user?.email)

    const { data: allReportProducts, isLoading, refetch } = useQuery({
        queryKey: ['report', email],
        queryFn: async () => {
            const res = await fetch(`https://book-bin-server.vercel.app/report/${email}`, {
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
    const handelDelete = id => {
        const proceed = window.confirm('Are u sure to delete??')
        if (proceed) {
            fetch(`https://book-bin-server.vercel.app/report/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        fetch(`https://book-bin-server.vercel.app/findReport/${id}`, {
                            headers: {
                                authorization: `bearer ${localStorage.getItem('accessToken')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    
                                    fetch(`https://book-bin-server.vercel.app/findBooking/report/${id}`, {
                                        headers: {
                                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.deletedCount > 0) {
                                                toast.success('Your reported data deleted successfully from products and bookings also!!!!')
                                                refetch()
                                            }
                                            else{
                                                toast.success(data.message)
                                                refetch()
                                            }
                                        })
                                }
                            })

                    }
                })
        }

    }

    if (isAdmin) {
        return (
            <div>
                <Title>Reported products</Title>

                {
                    isAdmin && <>
                        <div className="overflow-x-auto w-full mt-8">
                            <table className="table w-full">
                                {/* <!-- head --> */}
                                <thead >
                                    <tr >
                                        <th></th>
                                        <th>Image</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allReportProducts?.map((reportProduct, i) => <tr
                                            key={reportProduct._id}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={reportProduct.img} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{reportProduct.bookName}</td>
                                            <td>${reportProduct.resalePrice}</td>

                                            <th>
                                                <label
                                                    onClick={() => handelDelete(reportProduct.productId)}
                                                    className="btn btn-error bg-red-600 text-white btn-xs">Delete</label>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                }

            </div>
        );
    }

};

export default ReportedProducts;