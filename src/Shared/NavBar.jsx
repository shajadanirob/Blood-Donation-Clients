import {  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import useAuth from "../Hooks/UseAuth";
const Navbar = () => {
 
    const {user,logOut} = useAuth()
    
  const [isOpen, setIsOpen] = useState(false);

  const slideIn = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    config: { duration: 300 },
  });



 




    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    const NabLinks = <>
    <ol><NavLink 
    
    to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>Home</NavLink></ol>

    <ol><NavLink to='/donationReq'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>Donation Request</NavLink></ol>

    <ol><NavLink to='/dashBoard'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>DashBoard</NavLink></ol>
    
    <ol><NavLink to='/blogs'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>Blogs</NavLink></ol>
    
   
</>

    return (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
            <img className="w-[20%] md:w-[25%]" src="https://i.ibb.co/2KbSFkF/download-removebg-preview.png" alt="Website Logo" />
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 ml-40" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5 font-bold">
{NabLinks}




     
          </div>
          <div className="flex items-center justify-end gap-3 hidden md:block">
          {
            user?<div className="dropdown dropdown-end flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="inline-flex items-center justify-center rounded-xl bg-[#ea062b] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#ea062b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={logOut}
                    >Logout</button>

<Link to='/stripe' className="inline-flex items-center justify-center rounded-xl bg-[#ea062b] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#ea062b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" >Donet now</Link>


            </div>
            :   <>
            <Link to='/login' className="inline-flex items-center justify-center rounded-xl bg-[#ea062b] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#ea062b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Login</Link>
          
            </>
            
          } 
          
           

          </div>



          
        </div>
      </div>
      <animated.div style={slideIn} className="md:hidden absolute inset-x-0 text-center border border-gray-100  py-3  backdrop-blur-sm h-[80vh] rounded-[50px] top-0 bg-white shadow-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute  top-2 right-2 text-gray-900 focus:outline-none"
        >
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 " viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        
<div className="block mt-24 py-2 px-4 font-bold text-gray-900 space-y-5">
<ol><NavLink 
    
    to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>Home</NavLink></ol>

    <ol><NavLink to='/donationReq'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>Donation Request</NavLink></ol>

    <ol><NavLink to='/dashBoard'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-[#ea062b]" : ""
  }>DashBoard</NavLink></ol>
    
   

 
</div>



{
            user?<>
             <div className="dropdown dropdown-end flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            </label>
            <button className="inline-flex items-center justify-center rounded-xl bg-[#5C98F2] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#5C98F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={logOut}
                    >Logout</button>


<Link to='/stripe' className="inline-flex items-center justify-center rounded-xl bg-[#ea062b] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#ea062b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" >Donet now</Link>
            
            </div>
             
            
            
            </>


            :  
            <> <Link to='/login' className="inline-flex items-center justify-center rounded-xl bg-[#ea062b] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#ea062b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Login</Link>
            
            
            </>
          } 
          
        {/* Login button remains outside the animated.div */}
      </animated.div>
    </header>
    
    );
};

export default Navbar;


