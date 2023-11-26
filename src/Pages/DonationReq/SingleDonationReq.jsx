import { useLoaderData } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiHospital1 } from "react-icons/ci";


const SingleDonationReq = () => {
    const singleDonation = useLoaderData()
    console.log(singleDonation)
    return (
        <div className="my-20 mx-auto min-h-[calc(100vh-250px)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
        
        <div className="py-8">
        <h1 className="mb-4 text-4xl text-center font-black text-black dark:text-white">
          Donation Blood
          <span className="text-[#ef3d32] dark:text-blue-500">Save Life</span>
        </h1>
          
        </div>

    

        <h1 className="mx-auto text-xl lg:text-3xl ">
          {singleDonation.Description}
        </h1>
    </div>
</div>

<div class="container my-12 mx-auto px-2 md:px-4">

    <section class="mb-32">

        <div class="flex justify-center">
            <div class="text-center text-[#ef3d32] md:max-w-xl lg:max-w-3xl">
                <h2 class="mb-12 px-6 text-3xl font-bold">
                    Contact me
                </h2>
            </div>
        </div>

        <div class="flex justify-center items-center">


            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex flex-wrap">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-[#ef3d32]">
                                <FaRegAddressCard />
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold">
                                    Address
                                </p>
                                <p class="text-neutral-500 ">
                                    {singleDonation.fullAddress}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-[#ef3d32]">
                                <IoLocationOutline />
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold ">
                                   Location
                                </p>
                                <p class="text-neutral-500 ">
                                    {singleDonation.recipientLocation}
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="align-start flex">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-[#ef3d32]">
                                 
                                <MdOutlineDateRange />
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold ">Date and time</p>
                                <p class="text-neutral-500 ">
                                    {singleDonation.donationDate}
                                </p>
                                <p class="text-neutral-500 ">
                                    {singleDonation.donationTime}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="align-start flex">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-[#ef3d32]">
                                <CiHospital1 />

                                  
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold">
                                    Hospital
                                </p>
                                <p class="text-neutral-500 ">
                                    {singleDonation.hospitalName}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className="flex justify-center items-center">
            <button className="'btn  space-x-2 rounded-lg border border-[#ef3d32] bg-[#ef3d32] px-7 py-3.5 font-semibold leading-6 text-white hover:border-[#ef3d32] hover:bg-[#ef3d32] hover:text-white focus:ring focus:ring-[#ef3d32] focus:ring-opacity-50 active:border-[#ef3d32]active:bg-blue-700 dark:focus:ring-[#ef3d32]dark:focus:ring-opacity-90">Donet</button>
        </div> 
        
    </section>
</div>
        </div>
    );
};

export default SingleDonationReq;