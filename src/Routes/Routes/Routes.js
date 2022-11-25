import AllProducts from "../../Page/CategoryProducts/AllProducts/AllProducts";
import AllSellers from "../../Page/Dashboard/Admin/AllSellers/AllSellers";
import DashBoardLayout from "../../Page/Dashboard/DashBoardLayout/DashBoardLayout";
import MyOrders from "../../Page/Dashboard/MyOrders/MyOrders";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Login/SignUp";
import Blog from "../../Page/Other/Blog/Blog";
import ErrorPage from "../../Page/Other/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/admin/allSeller',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
        ]
    }
])

export default router