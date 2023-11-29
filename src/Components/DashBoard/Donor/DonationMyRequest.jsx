import { useEffect, useState } from "react";
import { getDonorDonationReq } from "../../../Api/DonationReq";
import useAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import toast from "react-hot-toast";

const DonationMyRequest = () => {
    const{user} = useAuth()
    const [Donations,setDonations] = useState([])
    useEffect(() =>{
        getDonorDonationReq(user.email)
        .then(res => setDonations(res))
      },[user])
console.log(Donations)


const handleDelete = id => {
  console.log(id)
  axios.delete(`http://localhost:5000/donationReqe/updated/${id}`)
  .then(res => {
      console.log(res.data)
      toast.success('your blog delete succussFully')
  })
 
}


    return (
        <div>
        <Helmet>
      <title>My Listings</title>
    </Helmet>

  
{
  Donations.length === 0 ? <p>No Donation availabe</p>
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
      <th>Update</th>
      <th>Delete</th>
  
      
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
  {
      Donations.map((donation,index) => <tr key={donation._id}>
          <th>{index + 1}</th>
          <td>{donation.recipientName}</td>
          <td>{donation.recipientLocation}</td>
          <td>{donation.donationDate}</td>
          <td>{donation.donationTime}</td>
          <td>
            <Link to={`/donationReqe/updated/${donation._id}`}>
            update
            </Link>
          </td>
          <td>
          <button onClick={() => handleDelete(donation._id)}>
            delete
            </button>
          </td>
          
      
         
        </tr>)
  }
    
   
  </tbody>
</table>
</div>
  
  </>
}

      </div>
    );
};

export default DonationMyRequest;