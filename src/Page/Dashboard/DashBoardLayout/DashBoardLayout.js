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
                    <ul className="menu p-4 w-80  text-white lg:text-black font-bold lg:font-semibold">
                        {
                            isAdmin && <>
                                <li><Link className=' border border-fuchsia-700' to='/dashboard/admin/allSellers'>All Sellers</Link></li>
                                <li><Link className=' border border-fuchsia-700 my-2' to='/dashboard/admin/allBuyers'>All Buyers</Link></li>
                                <li><Link className=' border border-fuchsia-700' to='/dashboard/admin/reportedProducts'>Reported Products</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link className=' border border-fuchsia-700' to='/dashboard/seller/addProduct'>Add product</Link></li>
                                <li><Link className=' border border-fuchsia-700 my-2' to='/dashboard/seller/myProducts'>My products</Link></li>
                            </>
                        }

                        {isBuyer && <li><Link className=' border border-fuchsia-700' to='/dashboard/buyer/myProducts'>My Bookings</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;