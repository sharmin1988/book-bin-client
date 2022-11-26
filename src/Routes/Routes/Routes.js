import AllProducts from "../../Page/CategoryProducts/AllProducts/AllProducts";
import AllBuyers from "../../Page/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Page/Dashboard/Admin/AllSellers/AllSellers";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";
import DashBoardLayout from "../../Page/Dashboard/DashBoardLayout/DashBoardLayout";
import AddProduct from "../../Page/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../Page/Dashboard/Seller/MyProducts/MyProducts";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Login/SignUp";
import Blog from "../../Page/Other/Blog/Blog";
import ErrorPage from "../../Page/Other/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Page/HomePage/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                element: <AllProducts></AllProducts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },

            // Admin access routes
            {
                path:'/dashboard/admin/allSellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/admin/allBuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },

            // Seller access routes
            {
                path: '/dashboard/seller/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/seller/myProducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            }, // ********* my buyers route Add korte hobe??????********
        ]
    }
])

export default router