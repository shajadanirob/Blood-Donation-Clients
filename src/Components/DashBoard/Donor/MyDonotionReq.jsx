import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";
import Container from "../../../Shared/Container";
import { Link } from "react-router-dom";
import axios from "axios";


const MyDonotionReq = () => {
    const{user} = useAuth()
    const [Donations,setDonations] = useState([])
    useEffect(() =>{
      axios.get(`http://localhost:5000/donets/${user.email}`)
      .then(res => setDonations(res.data))
    },[user])

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
        <th>Donor name</th>
        <th>Donor email</th>
        <th>Donation status</th>
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
            <td>{donation.donetorName}</td>
            <td>{donation.donetorEmail}</td>
            <td>{donation.status}</td>
            <td>
              <Link className="text-[#ea062b]" to={`/donets/updated/${donation._id}`}>
              update
              </Link>
            </td>
            <td>
            <Link className="text-[#ea062b]">
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

export default MyDonotionReq;