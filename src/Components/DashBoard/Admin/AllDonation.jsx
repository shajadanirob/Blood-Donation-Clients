import { useEffect, useState } from "react";
import { getAllDonationReq } from "../../../Api/DonationReq";
import { Link } from "react-router-dom";
import Container from "../../../Shared/Container";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const AllDonation = () => {
    const [Donations,setDonations] = useState([])
    useEffect(()=>{
        getAllDonationReq()
        .then(data => setDonations(data))
    },[])

    const handleDelete = id => {
      console.log(id)
      axios.delete(`http://localhost:5000/donationReqe/updated/${id}`)
      .then(res => {
          console.log(res.data)
          toast.success('Donation delete succussFully')
      })
     
    }
    
    return (
        <div>
           <Helmet>
            <title>All donation request</title>
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
                  <button onClick={()=> handleDelete(donation._id)}>Delete</button>
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