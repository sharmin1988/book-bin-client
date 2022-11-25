import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import AllSellers from '../Admin/AllSellers/AllSellers';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            {
                isAdmin?<AllSellers></AllSellers>:<MyOrders></MyOrders>
            }
        </div>
    );
};

export default Dashboard;