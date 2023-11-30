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
import MyDonotionReq from "../Components/DashBoard/Donor/MyDonotionReq";
import CreateDonationReq from "../Components/DashBoard/Donor/CreateDonationReq";
import Alluser from "../Components/DashBoard/Admin/Alluser";
import Statics from "../Components/DashBoard/Admin/Statics";
import Profile from "../Components/MyPropile/Profile";
import AllDonation from "../Components/DashBoard/Admin/AllDonation";
import ManageDonet from "../Components/DashBoard/Donor/manageDonet";
import PraivetRoute from "./PraivetRoutes";
import DonorRoute from "./DonorRoute";
import AdminRote from "./AdminRote";
import AdminVolntiRoute from "./AdminVolntiRoute";
import SingleStatus from "../Components/SIngleStatusUpdate/SingleStatus";
import SingleDonationModal from "../Components/SingleDonationModal/SingleDonationModal";
import UpdatedDonet from "../Components/UpdatedDonet/UpdatedDonet";
import UpdatedDonetStatus from "../Components/UpdatedDonet/UpdatedDonetStatus";
import Blog from "../Components/DashBoard/Admin/UploadBlog";
import HomeBlogs from "../Pages/Blogs/HomeBlogs";
import BLogDetails from "../Pages/Blogs/BLogDetails";
import DonationMyRequest from "../Components/DashBoard/Donor/DonationMyRequest";
import AllBlog from "../Components/DashBoard/Admin/AllBlog";
import UpdateBlogs from "../Pages/Blogs/UpdateBlogs";
import SearchDonation from "../Pages/SearchDonation";
import SingleDonationReqUp from "../Components/DashBoard/Donor/SingleDonationReqUp";

import Payment from "../Pages/Paymet/StripeFrom";

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
          element: <PraivetRoute>
            <SingleDonationReq/>
          </PraivetRoute>,
          loader: ({params}) => getSingleDonationReq(params.id)

        },
        {
          path:'/blogs',
          element: <HomeBlogs/>
        },
        {
          path:'/blogs/:id',
          element: <BLogDetails/>,
          loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path:'/search',
          element: <SearchDonation/>,
          

        },{
          path:'/stripe',
          element: <Payment/>
        }
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
      path:'/user/:email',
      element: <SingleStatus/>,
      loader: ({params}) => fetch(`http://localhost:5000/user/${params.email}`)

    },
    {
      path:'/donationReqe/:id',
      element: <PraivetRoute>
        <SingleDonationModal/>
      </PraivetRoute>,
      loader: ({params}) => getSingleDonationReq(params.id)

    },
    {
      path:'/donets/updated/:id',
      element:<PraivetRoute>
        <UpdatedDonet/>
      </PraivetRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/donets/updated/${params.id}`)

    },
    {
      path:'/donets/status/:id',
      element:<PraivetRoute>
        <UpdatedDonetStatus/>
      </PraivetRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/donets/status/${params.id}`)

    },
    {
      path:'/blogs/updated/:id',
      element: <PraivetRoute>
       <AdminRote>
       <UpdateBlogs/>
       </AdminRote>
      </PraivetRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/blogs/updated/${params.id}`)

    },
    {
      path:'/donationReqe/updated/:id',
      element:
        <PraivetRoute>
          <DonorRoute>
          <SingleDonationReqUp/>
        </DonorRoute>
        </PraivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/donationReqe/updated/${params.id}`)
    },
    {
      path:'/dashBoard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path:'/dashBoard',
          element:<PraivetRoute>
             <Profile/>
          </PraivetRoute>

        },
      {
        path:'myDonationReq',
        element:
          <PraivetRoute>
            <DonorRoute>
         <DonationMyRequest/>
          </DonorRoute>
          </PraivetRoute>
      },
      
      {
        path:'donationReq',
        element:
          <PraivetRoute>
            <DonorRoute>
          <MyDonotionReq></MyDonotionReq>
          </DonorRoute>
          </PraivetRoute>
      },
     
     
      {
        path:'createDonation',
        element:  <PraivetRoute>
        <DonorRoute>
        <CreateDonationReq/>
        </DonorRoute>
      </PraivetRoute>
  
      },
      {
        path:'users',
        element:<PraivetRoute>
          <AdminRote>
          <Alluser/>

          </AdminRote>
        </PraivetRoute>
      },
      {
        path: 'Statistics',
        element: 
           <PraivetRoute>
             <AdminRote>
            <Statics/>
          </AdminRote>
           </PraivetRoute>
        
      },
      {
        path:'allDonation',
        element:
         <PraivetRoute>
           <AdminVolntiRoute>
          <AllDonation/>
          </AdminVolntiRoute>
         </PraivetRoute>
       
      },
      {
        path:'manage',
        element: <PraivetRoute>
          <ManageDonet/>
        </PraivetRoute>
      },
      {
        path:'addBlog',
        element:
           <PraivetRoute>
            <AdminVolntiRoute>
           <Blog/>
          </AdminVolntiRoute>
           </PraivetRoute>
      

      },
      {
        path:'allBlog',
        element:
           <PraivetRoute>
            <AdminVolntiRoute>
          <AllBlog/>
          </AdminVolntiRoute>
           </PraivetRoute>
      

      },
    ]
    },
  ]);

  export default router