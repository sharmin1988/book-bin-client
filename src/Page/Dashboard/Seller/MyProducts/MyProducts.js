import React, { useContext, useState } from 'react';
import Title from '../../../../Components/Title';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useSeller from '../../../../hooks/useSeller';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../../Shared/Loader/Loader';
import CustomModal from '../../../Shared/CustomModal/CustomModal';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { email } = user
    const [isSeller] = useSeller(user?.email)
    const [advertise, setAdvertise] = useState('')

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(data)
            return data
        }
    })

    const cancelAdvertise = () => {
        setAdvertise(null)
    }
    const handelDelete = id => {
        const proceed = window.confirm('Are u sure to delete??')
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
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

    const handelAdvertise = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Your advertise display on homepage successfully!!!!')
                    refetch()
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Title>My products</Title>
            {
                isSeller && <> <div className="overflow-x-auto w-full mt-8">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead >
                            <tr >
                                <th></th>
                                <th>image</th>
                                <th>Book Name</th>
                                <th>Price</th>
                                <th>Sale Status</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => <tr
                                    key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.img} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.bookName}</td>
                                    <td>${product.resalePrice}</td>
                                    <td>
                                        available
                                    </td>
                                    <th>
                                        {
                                            product.advertise ?
                                                <button
                                                    disabled
                                                    className="btn bg-fuchsia-700 text-white btn-xs"
                                                >Show Ad</button>
                                                : <label htmlFor="my-modal"
                                                    onClick={() => setAdvertise(product._id)}
                                                    className="btn bg-fuchsia-700 text-white btn-xs"
                                                >Show Ad</label>
                                        }

                                    </th>
                                    <th>
                                        <label htmlFor="my-modal"
                                            onClick={() => handelDelete(product._id)}
                                            className="btn btn-error bg-red-600 text-white btn-xs">Delete</label>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                    {advertise && <CustomModal
                        title={'Are you sure u want to display Advertise??'}
                        message={'your product is displayed Home Page. Go have a look!!!'}
                        closeModal={cancelAdvertise}
                        successAction={handelAdvertise}
                        modalData={advertise}
                        successActionBtnName={'Advertise'}
                    ></CustomModal>

                    }
                </>
            }
        </div>
    );
};

export default MyProducts;