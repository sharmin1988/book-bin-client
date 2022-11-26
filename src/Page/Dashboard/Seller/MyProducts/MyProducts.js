import React, { useContext } from 'react';
import Title from '../../../../Components/Title';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useSeller from '../../../../hooks/useSeller';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { email } = user
    // const [isSeller] = useSeller(user?.email)

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

    if(isLoading){
        return <p>loading.............</p>
    }

    return (
        <div>
            <Title>My products</Title>
            <div className="overflow-x-auto w-full mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
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
                                    <label htmlFor="my-modal" className="btn bg-fuchsia-700 text-white btn-xs">Show Ad</label>
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
        </div>
    );
};

export default MyProducts;