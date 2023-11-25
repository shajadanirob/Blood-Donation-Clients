import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DonationReq from "../Pages/DonationReq/DonationReq";
import DashBoard from "../Pages/DashBoardLayout/DashBoard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { getAllDonationReq, getSingleDonationReq } from "../Api/DonationReq";
import SingleDonationReq from "../Pages/DonationReq/SingleDonationReq";
import DashboardLayout from "../Pages/DashBoardLayout/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/donationReq',
          element:<DonationReq></DonationReq>,
          loader: () => getAllDonationReq()
        },
        {
          path:'/donationReq/:id',
          element: <SingleDonationReq/>,
          loader: ({params}) => getSingleDonationReq(params.id)

        },
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element: <Register></Register>
    },
    {
      path:'/dashBoard',
      element: <DashboardLayout></DashboardLayout>,
      children: [{
        path:'/dashBoard/sidebar'
      }]
    },
  ]);

  export default router