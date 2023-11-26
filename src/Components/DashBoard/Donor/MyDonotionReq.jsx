import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";
import { getDonorDonationReq } from "../../../Api/DonationReq";
import Container from "../../../Shared/Container";
import { Link } from "react-router-dom";


const MyDonotionReq = () => {
    const{user} = useAuth()
    const [Donations,setDonations] = useState([])
    useEffect(()=>{
        getDonorDonationReq(user?.email)
        .then(data => setDonations(data))
    },[user])
    return (
        <div>
          <Helmet>
        <title>My Listings</title>
      </Helmet>

      <Container>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Requester name</th>
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
            <td>{donation.requesterName}</td>
            <td>{donation.recipientLocation}</td>
            <td>{donation.donationDate}</td>
            <td>{donation.donationTime}</td>
        
            <td>
                <Link to={`${donation._id}`}>
                <button  className="btn btn-sm">Update</button>
                </Link>
                </td>
            <td>
                <Link to={`${donation._id}`}>
                <button  className="btn btn-sm">Delete</button>
                </Link>
                </td>
          </tr>)
    }
      
     
    </tbody>
  </table>
</div>
      </Container>
        </div>
    );
};

export default MyDonotionReq;