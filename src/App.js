import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashbord from './Component/Dashbord/Dashbord';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Main from './Component/Main/Main';
import MainCatagory from './Component/MainCatagory/MainCatagory';
import MyOrder from './Component/MyOrder/MyOrder';
import Payment from './Component/Payment/Payment';
import Product from './Component/Product/Product';
import Profile from './Component/Profile/Profile';
import SignUp from './Component/SignUp/SignUp';
import User from './Component/User/User';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          children: [
            {
              path: '/main',
              element: <MainCatagory></MainCatagory>
            },
            // {
            //   path: '/main/ok',
            //   element: <MainCatagory></MainCatagory>
            // },
            {
              path: '/product/:categoryname',
              element: <Product></Product>,
              loader: ({ params }) => fetch(`https://sunshine-2-server.vercel.app//product/${params.categoryname}`)
            }
          ]
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
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/dashbord',
          element: <Dashbord></Dashbord>,
          children: [
            {
              path: '/dashbord',
              element: <MyOrder></MyOrder>
          },
          {
              path: '/dashbord/myorder',
              element: <MyOrder></MyOrder>
          },
          {
              path: '/dashbord/user',
              element: <User></User>
          },
          {
              path: '/dashbord/payment/:id',
              element: <Payment></Payment>,
              loader: ({ params }) => fetch(`https://sunshine-2-server.vercel.app//bookings/${params.id}`)
          }
          ]
        }

      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
