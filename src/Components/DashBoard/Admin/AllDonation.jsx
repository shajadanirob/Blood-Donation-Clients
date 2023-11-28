import { useEffect, useState } from "react";
import { getAllDonationReq } from "../../../Api/DonationReq";
import { Link } from "react-router-dom";
import Container from "../../../Shared/Container";


const AllDonation = () => {
    const [Donations,setDonations] = useState([])
    useEffect(()=>{
        getAllDonationReq()
        .then(data => setDonations(data))
    },[])
    return (
        <div>
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
        <th>status</th>
        <th>action</th>
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
                Pending
                </td>
            <td>
                <Link to={`${donation._id}`}>
                <button  className="btn btn-sm">Update</button>
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

export default AllDonation;