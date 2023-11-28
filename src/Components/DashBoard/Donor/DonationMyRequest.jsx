import { useEffect, useState } from "react";
import { getDonorDonationReq } from "../../../Api/DonationReq";
import useAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

const DonationMyRequest = () => {
    const{user} = useAuth()
    const [Donations,setDonations] = useState([])
    useEffect(() =>{
        getDonorDonationReq(user.email)
        .then(res => setDonations(res))
      },[user])
console.log(Donations)


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
          <td>{donation.date}</td>
          <td>{donation.donationTime}</td>
          <td>
            <Link to={`/donets/updated/${donation._id}`}>
            update
            </Link>
          </td>
          <td>
          <Link>
            delete
            </Link>
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