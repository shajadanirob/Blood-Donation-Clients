import { FaRegAddressBook, FaSearch } from "react-icons/fa";
const Banner = () => {
    return (
        <div>
            
<div
  className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100 my-20"
>

  <div
    className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl"
  >
    <div className="lg:flex lg:w-1/2 lg:items-center">
      <div>
        
        <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
          Donation Blood
          <span className="text-[#ef3d32] dark:text-blue-500">Save Life</span>
        </h1>
        <h2
          className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300"
        >
         Join Us in Saving Lives: Introducing Blood Donation - A Dedicated Platform for Blood Donation and Hope
        </h2>
        <div
          className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start"
        >
          <a
            href="javascript:void(0)"
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-[#ef3d32] bg-[#ef3d32] px-7 py-3.5 font-semibold leading-6 text-white hover:border-[#ef3d32] hover:bg-[#ef3d32] hover:text-white focus:ring focus:ring-[#ef3d32] focus:ring-opacity-50 active:border-[#ef3d32]active:bg-blue-700 dark:focus:ring-[#ef3d32]dark:focus:ring-opacity-90"
          >
     <FaRegAddressBook />

            <span> Join as a donor</span>
          </a>
          <a
            href="javascript:void(0)"
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <FaSearch />
            <span> Search Donors</span>
          </a>
        </div>
      </div>
    </div>
    <div className="lg:ml-16 lg:flex lg:w-[45%] lg:items-center lg:justify-center">
      <div className="relative mx-5 lg:w-96">
        <div
          className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 h-40 w-40 rounded-full border border-blue-200 dark:border-[#ef3d32] lg:h-72 lg:w-72"
        ></div>
        <div
          className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 h-40 w-40 rounded-full border border-blue-100 dark:border-[#ef3d32] lg:h-72 lg:w-72"
        ></div>
        <div
          className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 h-40 w-40 rounded-full border border-blue-200 dark:border-[#ef3d32] lg:h-72 lg:w-72"
        ></div>
        <div
          className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 h-40 w-40 rounded-full border border-blue-100 dark:border-[#ef3d32] lg:h-72 lg:w-72"
        ></div>
        <div
          className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-[#ef3d32] dark:bg-[#ef3d32]"
        ></div>
        <div
          className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-[#ef3d32] bg-opacity-75 shadow-inner dark:bg-[#ef3d32] dark:bg-opacity-75"
        ></div>
        <img
          src="https://i.ibb.co/pL4DgHD/alexandre-boucey-YEx-N-Wg-ILh-E-unsplash.jpg"
          className="relative mx-auto rounded-lg shadow-lg"
          alt="Hero Image"
        />
      </div>
    </div>
  </div>

</div>


        </div>
    );
};

export default Banner;