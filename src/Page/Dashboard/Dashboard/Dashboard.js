import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import AllSellers from '../Admin/AllSellers/AllSellers';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            {isSeller && <AllSellers></AllSellers>}
            {isAdmin && <AllSellers></AllSellers>}
            {!isAdmin && !isSeller && <MyOrders></MyOrders>}
        </div>
    );
};

export default Dashboard;