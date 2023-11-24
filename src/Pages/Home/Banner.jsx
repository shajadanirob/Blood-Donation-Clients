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
          <span className="text-[#ea062b] dark:text-blue-500">Save Life</span>
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
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-[#ea062b] bg-[#ea062b] px-7 py-3.5 font-semibold leading-6 text-white hover:border-[#ea062b] hover:bg-[#ea062b] hover:text-white focus:ring focus:ring-[#ea062b] focus:ring-opacity-50 active:border-[#ea062b]active:bg-blue-700 dark:focus:ring-[#ea062b]dark:focus:ring-opacity-90"
          >
            <svg
              className="hi-mini hi-arrow-down-tray inline-block h-5 w-5 opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
              />
              <path
                d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
              />
            </svg>
            <span>Join Now</span>
          </a>
          <a
            href="javascript:void(0)"
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <span>Learn more</span>
          </a>
        </div>
      </div>
    </div>
    <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
      <div className="relative mx-5 lg:w-96">
        <div
          className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 h-40 w-40 rounded-full border border-blue-200 dark:border-blue-900 lg:h-72 lg:w-72"
        ></div>
        <div
          className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 h-40 w-40 rounded-full border border-blue-100 dark:border-blue-950 lg:h-72 lg:w-72"
        ></div>
        <div
          className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 h-40 w-40 rounded-full border border-blue-200 dark:border-blue-900 lg:h-72 lg:w-72"
        ></div>
        <div
          className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 h-40 w-40 rounded-full border border-blue-100 dark:border-blue-950 lg:h-72 lg:w-72"
        ></div>
        <div
          className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800"
        ></div>
        <div
          className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75"
        ></div>
        <img
          src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
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