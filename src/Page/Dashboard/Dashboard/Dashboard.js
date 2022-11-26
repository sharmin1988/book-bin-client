import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';
import AllSellers from '../Admin/AllSellers/AllSellers';
import MyOrders from '../MyOrders/MyOrders';
import AddProduct from '../Seller/AddProduct/AddProduct';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            {isSeller && <AddProduct></AddProduct>}
            {isAdmin && <AllSellers></AllSellers>}
            {isBuyer && <MyOrders></MyOrders>}
        </div>
    );
};

export default Dashboard;