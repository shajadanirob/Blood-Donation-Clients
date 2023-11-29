import toast from "react-hot-toast";
import { addDonationReq } from "../../../Api/DonationReq";
import useAuth from "../../../Hooks/UseAuth";
import Container from "../../../Shared/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const CreateDonationReq = () => {
    const [Districts,setDistrict] = useState([])
    const [upeZila,setUpeZila] = useState([])
    const navigate = useNavigate()
    useEffect(() =>{
        fetch('/Distric.json')
        .then(res => res.json())
        .then(data => setDistrict(data))
    },[])
   
    useEffect(() =>{
        fetch('/Upozila.json')
        .then(res => res.json())
        .then(data => setUpeZila(data))
    },[])

    const {user} = useAuth()
    console.log(user)
    const handleSubmit =async (event) =>{
        event.preventDefault()
        const from = event.target;
        const requesterName = from.requesterName.value;
        const recipientLocation = from.recipientLocation.value;
        const requesterEmail = from.requesterEmail.value;
        const recipientName = from.recipientName.value;
        const recipientDistrict = from.recipientDistrict.value;
        const recipientUpazila = from.recipientUpazila.value;
        const hospitalName = from.hospitalName.value;
        const fullAddress = from.fullAddress.value;
        const donationDate = from.donationDate.value;
        const donationTime = from.donationTime.value;
        const donationStatus = from.Status.value;
        const Description = from.Description.value
        const Alldata = {
            requesterName,requesterEmail,recipientLocation,recipientName,recipientDistrict,recipientUpazila,hospitalName,fullAddress,donationDate,donationTime,donationStatus,Description
        }
       try{
        const DonationReqData = await addDonationReq(Alldata)
        toast.success('Donation request successFully')
        navigate('/')
       }
       catch(error){
        console.log(error)
       }
        console.log(Alldata)
    }
    return (
      <Container>
          <div className="bg-white border border-4 rounded-lg shadow relative w-full">
        <div className="flex justify-center items-center">
           
        </div>
        <h3 className="text-3l text-[#ea062b] text-center font-bold">
            Add Donation Request
        </h3>

        <div className="flex items-start justify-between p-5 border-b rounded-t"></div>

        <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">  requester name</label>
                        <input readOnly type="text"  defaultValue={user?.displayName}  name="requesterName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required=""/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">recipient location</label>
                        <input type="text" name="recipientLocation" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">requester email</label>
                        <input type="email" readOnly defaultValue={user?.email} name="requesterEmail" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">recipient name</label>
                        <input type="text" name="recipientName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">recipient district</label>
             

                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" name="recipientDistrict" required id="">
                  <option disabled selected value="">district</option>
                  {
                                    Districts.map(dist =>  <option key={dist.id} value={dist.name}>{dist.name}</option>)
                                  }
                </select>
              </div>
                    <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">recipient upazila</label>
             

                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" name="recipientUpazila" required id="">
                  <option disabled selected value=""> upazila</option>
                  {
                                    upeZila.map(upo =>  <option value={upo.name} key={upo.id}>{upo.name}</option>)
                                  }
                </select>
              </div>
                 
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2"> hospital name
                       </label>
                        <input type="text" name="hospitalName" id="brand"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2"> full address 
                       </label>
                        <input type="text" name="fullAddress" id="brand"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required />
                    </div>




                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">donation date
                         </label>
                        <input type="date" name="donationDate" id="brand"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required />
                    </div>




                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">donation time
</label>
                        <input type="time" name="donationTime" id="brand"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required />
                    </div>


                 
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2"> donation status 
                       </label>
                        <input type="text" name="Status"   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  defaultValue='pending' required />
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                        <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description" name="Description"></textarea>
                    </div>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b flex items-center justify-center">
                    <button className=" inline-flex text-white bg-[#ea062b] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg" type="submit">Add Services</button>
                </div>
            </form>
        </div>
    </div>
      </Container>
    );
};

export default CreateDonationReq;