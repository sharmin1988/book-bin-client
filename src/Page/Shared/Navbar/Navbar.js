import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/book.png'
import PrimaryBtn from '../../../Components/PrimaryBtn';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <>
        <li><Link to="/" className='font-semibold text-fuchsia-700 text-lg'>Blog</Link></li>
        <li><Link to="/" className='font-semibold text-fuchsia-700 text-lg'>Dashboard</Link></li>
        <li><Link to="/about" className='font-semibold text-fuchsia-700 text-lg'>About</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut} >Sign out</button></li>
            </>
            : <Link to="/login"><PrimaryBtn>Login</PrimaryBtn></Link>}
    </>
    return (
        <div className="navbar bg-gray-100 flex justify-between lg:px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex justify-start items-center'>
                    <Link to="/"><span><img className=' h-8 lg:h-14 mr-3' src={logo} alt="" /></span></Link>
                    <Link to="/" className="font-bold text-md lg:text-2xl text-fuchsia-700">Book B!n</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden mr-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
        </div>
    );
};

export default Navbar;