import { useEffect, useState } from "react";
import { getAllUser } from "../../../Api/Auth";
import { getAllDonationReq } from "../../../Api/DonationReq";
import { FaUser } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { SiVirustotal } from "react-icons/si";
import { Helmet } from "react-helmet";
const Statics = () => {
    const [users ,setAllusers] = useState(0)
    useEffect(() =>{
        getAllUser()
        .then(res => setAllusers(res))
    },[])
    const [Donations,setDonations] = useState(0)
    useEffect(()=>{
        getAllDonationReq()
        .then(data => setDonations(data))
    },[])
    return (
        <div>
             <Helmet>
            <title>statics</title>
          </Helmet>
           <div class="bg-gray-200 ">
    <div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">
        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                  <FaUser />  <span>Total user</span>
                    
                </div>

                <div class="text-3xl">
                   {users.length}
                </div>
            </div>
        </div>

        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                  <FaExternalLinkSquareAlt />
  <span>All Donation Req</span>
                </div>

                <div class="text-3xl">
                    {Donations.length}
                </div>

            
            </div>

        </div>

        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
<SiVirustotal />

                    <span>Total donet </span>
                </div>

                <div class="text-3xl">
                    3543
                </div>

            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Statics;