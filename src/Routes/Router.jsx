import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DonationReq from "../Pages/DonationReq/DonationReq";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
          element:<DonationReq></DonationReq>
        },
      ]
    },
    {
      path:'/dashBoard',
      element: <DashBoard></DashBoard>
    },
    {
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element: <Register></Register>
    }
  ]);

  export default router