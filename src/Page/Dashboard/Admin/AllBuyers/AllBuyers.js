import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Title from '../../../../Components/Title';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import Loader from '../../../Shared/Loader/Loader';

const AllBuyers = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    const [isAdmin] = useAdmin(email)

    const { data: allBuyers, isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/admin/allBuyers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

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
            <Title>all buyers</Title>

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
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBuyers?.map((buyer, i) => <tr
                                        key={buyer._id}>
                                        <th>{i + 1}</th>
                                        <td>{buyer.name}</td>
                                        <td>${buyer.email}</td>
                                        
                                        <th>
                                            <label htmlFor="my-modal"
                                                onClick={() => handelDelete(buyer._id)}
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

export default AllBuyers;