import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const SingleDonationReqUp = () => {
    const loader = useLoaderData()

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const requesterName = form.requesterName.value
        const requesterEmail = form.requesterEmail.value
        const date = form.date.value
        const recipientName = form.recipientName.value;
        const recipientLocation = form.recipientLocation.value;
        const donationTime = form.donationTime.value
    
        const UpdatedDonation ={
          date,requesterName,requesterEmail,recipientName,recipientLocation,donationTime
        }
        console.log(UpdatedDonation)
       axios.put(`http://localhost:5000/donationReqe/updated/${loader._id}`,UpdatedDonation)
       .then(res =>{
        console.log(res.data)
        toast.success('your donetion request updated success')
       })
    }






    return (
        <div>
          
        <div className="flex items-start justify-between p-5 border-b rounded-t">
      <h3 className="text-3l  font-semibold">
          Updated a My Donation
      </h3>
  </div>

  <div className="p-6 space-y-6">
    
  <form onSubmit={handleSubmit} >

<div className="mb-5">
<label className="block mb-2 font-bold text-gray-600">recipientName</label>
<input  type="text" defaultValue={loader.recipientName} id="twitter" name="recipientName" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>
<div className="mb-5">
<label className="block mb-2 font-bold text-gray-600">recipientLocation</label>
<input  type="text" defaultValue={loader.recipientLocation} id="twitter" name="recipientLocation" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>
<div className="mb-5">
<label className="block mb-2 font-bold text-gray-600">requester Name</label>
<input  type="text" defaultValue={loader.requesterName} id="twitter" name="requesterName" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>
<div className="mb-5">
<label className="block mb-2 font-bold text-gray-600">requester Email</label>
<input  type="text" defaultValue={loader.requesterEmail} id="twitter" name="requesterEmail" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>


<div className="mb-5">
<label for="twitter" className="block mb-2 font-bold text-gray-600">time</label>
<input type="time" name="donationTime" 
defaultValue={loader.donationTime}  placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" required/>
</div>
<div className="mb-5">
<label for="twitter" className="block mb-2 font-bold text-gray-600">Date</label>
<input type="date" name="date" 
defaultValue={loader.donationDate} placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" required/>
</div>
{/* <div className="mb-5">
<label for="twitter" className="block mb-2 font-bold text-gray-600">Status</label>
<input type="text" name="status" 
defaultValue={loader.status} placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" required/>
</div> */}


<button className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">Update Now</button>
</form>
    
  </div>
    </div>
    );
};

export default SingleDonationReqUp;