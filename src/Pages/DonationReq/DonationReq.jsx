import { useEffect, useState } from "react";
import { getAllDonationReq } from "../../Api/DonationReq";
import axiosSecure from "../../Api/Index";
import Container from "../../Shared/Container";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";



const DonationReq = () => {
    const donations = useLoaderData()
   
    
    return (
        <div className="my-20">
           <Helmet>
            <title>Donation Request</title>
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
        <th>view Details</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        donations.map((donation,index) => <tr key={donation._id}>
            <th>{index + 1}</th>
            <td>{donation.requesterName}</td>
            <td>{donation.recipientLocation}</td>
            <td>{donation.donationDate}</td>
            <td>{donation.donationTime}</td>
            <td>
                <Link to={`${donation._id}`}>
                <button  className="btn btn-sm text-white bg-[#ef3d32]">view details</button>
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

export default DonationReq;