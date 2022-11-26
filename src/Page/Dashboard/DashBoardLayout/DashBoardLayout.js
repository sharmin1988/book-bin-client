import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';
import Navbar from '../../Shared/Navbar/Navbar';



const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  p-4">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/admin/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/admin/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/admin/reportedItems'>Reported items</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/seller/addProduct'>Add product</Link></li>
                                <li><Link to='/dashboard/seller/myProducts'>My products</Link></li>
                                <li><Link to='/dashboard/seller/myBuyers'>My Buyers</Link></li>
                            </>
                        }

                        {isBuyer && <li><Link to='/dashboard/buyer/myProducts'>My Bookings</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;