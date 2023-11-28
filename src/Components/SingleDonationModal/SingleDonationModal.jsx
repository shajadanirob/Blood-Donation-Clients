import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";
import axiosSecure from "../../Api/Index";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleDonationModal = () => {
    const {user} = useAuth()
    console.log(user)

    const loader = useLoaderData()
    console.log(loader)
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const requsterName = form.requesterName.value
        const requesterEmail = form.requesterEmail.value
        const donetorEmail = form.userEmail.value
        const donetorName = form.userName.value
        const date = form.date.value
        const recipientName = form.recipientName.value;
        const recipientLocation = form.recipientLocation.value;
        const donationTime = form.donationTime.value; 
        const status = form.status.value; 
        console.log(donetorEmail)
    
        const donets ={
            donetorEmail,donetorName,date,status,requsterName,requesterEmail,recipientName,recipientLocation,donationTime
        }
        console.log(donets)
       axios.post('http://localhost:5000/donets',donets)
       .then(res =>{
        console.log(res.data)
        toast.success('your donetion success')
       })
    }




    return (
        <div>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">


      <div className=" flex items-center">
    <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Book Now</h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            
            <form onSubmit={handleSubmit}>

                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">recipientName</label>
                    <input readOnly type="text" defaultValue={loader.recipientName} id="twitter" name="recipientName" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">recipientLocation</label>
                    <input readOnly type="text" defaultValue={loader.recipientLocation} id="twitter" name="recipientLocation" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">requster name</label>
                    <input readOnly type="text" defaultValue={loader.requesterName} id="twitter" name="requesterName" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">requster email</label>
                    <input readOnly type="text" defaultValue={loader.requesterEmail} id="twitter" name="requesterEmail" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">user email</label>
                    <input readOnly type="text" defaultValue={user.email} id="twitter" name="userEmail" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">user name</label>
                    <input readOnly type="text" defaultValue={user.displayName} id="twitter" name="userName" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">Status</label>
                    <input readOnly type="text" defaultValue='inprogress' id="twitter" name="status" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div className="mb-5">
                    <label for="twitter" className="block mb-2 font-bold text-gray-600">time</label>
                    <input type="time" name="donationTime" 
                    defaultValue={loader.donationTime} readOnly placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" required/>
                </div>
                <div className="mb-5">
                    <label for="twitter" className="block mb-2 font-bold text-gray-600">Date</label>
                    <input type="date" name="date" readOnly
                    defaultValue={loader.donationDate} placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" required/>
                </div>

                <button className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">Donet Now</button>
            </form>
        </div>
    </div>
</div>



    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default SingleDonationModal;