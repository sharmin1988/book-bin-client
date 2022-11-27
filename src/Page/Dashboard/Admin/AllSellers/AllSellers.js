import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Title from '../../../../Components/Title';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import CustomModal from '../../../Shared/CustomModal/CustomModal';
import Loader from '../../../Shared/Loader/Loader';

const AllSellers = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const [isAdmin] = useAdmin(email)

    const { data: allSellers, isLoading, refetch } = useQuery({
        queryKey: ['allSellers', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/admin/allSellers/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const handelSellerVerification = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSellerVerifiedInDb(id)
                }
            })
    }

    const setSellerVerifiedInDb = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Your seller is verified successfully!!!!')
                    refetch()
                }
            })
    }

    const handelDelete = id => {
        const proceed = window.confirm('Are u sure to delete??')
        console.log(id)
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success('Your data deleted successfully!!!!')
                        refetch()
                    }
                })
        }

    }

    if (isLoading) {
        <Loader></Loader>
    }

    return (
        <div>
            <Title>All sellers</Title>
            {
                isAdmin && <>
                    <div className="overflow-x-auto w-full mt-8">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead >
                                <tr >
                                    <th></th>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>Seller Verification</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allSellers.map((seller, i) => <tr
                                        key={seller._id}>
                                        <th>{i + 1}</th>
                                        <td>{seller.name}</td>
                                        <td>${seller.email}</td>
                                        <th>
                                            {
                                               seller.isVerified ?
                                                    <button
                                                        disabled
                                                        className="btn bg-green-700 text-white btn-xs"
                                                    >Verified</button>
                                                    : <label htmlFor="my-modal"
                                                        onClick={() => handelSellerVerification(seller._id)}
                                                        className="btn bg-green-700 text-white btn-xs"
                                                    >Verify seller</label>
                                            }
                                        </th>
                                        <th>
                                            <label htmlFor="my-modal"
                                                onClick={() => handelDelete(seller._id)}
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
};

export default AllSellers;