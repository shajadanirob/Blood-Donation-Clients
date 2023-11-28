

import { Helmet } from 'react-helmet-async'
import useAuth from '../../Hooks/UseAuth'
import useRole from '../../Hooks/UseRole'
import { getDonorDonationReq } from '../../Api/DonationReq'
import { useEffect, useState } from 'react'
import Container from '../../Shared/Container'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Profile = () => {
  const {role } = useRole()
  const{user} = useAuth()
  const [Donations,setDonations] = useState([])
  useEffect(() =>{
    axios.get(`http://localhost:5000/donets/${user.email}`)
    .then(res => setDonations(res.data))
  },[user])

  console.log(user)
  return (
    <div>
      <div className='flex justify-center items-center'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
            {/* {role && role.toUpperCase()} */}
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            {/* User Id: {user.uid} */}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user.email}</span>
              </p>

              <div>
                <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Container>
      <h1 className='text-3xl text-center'>My donation request</h1>
   {
    Donations.length === 0 ? 
    <p className='text-3xl text-gray-500 text-center my-10'>You have no donation</p>

    :

    <>
  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>total</th>
        <th>recipient Name</th>
        <th>location</th>
        <th>date</th>
        <th>time</th>
        <th>Donor name</th>
        <th>Donor email</th>
        <th>Donation status</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        Donations.slice(0,3).map((donation,index) => <tr key={donation._id}>
            <th>{index + 1}</th>
            <td>{donation.recipientName}</td>
            <td>{donation.recipientLocation}</td>
            <td>{donation.date}</td>
            <td>{donation.donationTime}</td>
            <td>{donation.donetorName}</td>
            <td>{donation.donetorEmail}</td>
            <td>{donation.status.status}</td>
            
           
          </tr>)
    }
      
     
    </tbody>
  </table>
</div>
    </>
   }

    </Container>
    <Link to='/dashboard/donationReq' className='flex items-center justify-center'><button className='btn'>viewALL</button></Link>
    </div>
  )
}

export default Profile