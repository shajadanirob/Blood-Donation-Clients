
import Container from '../../Shared/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getToken, savedUser } from '../../Api/Auth';
import useAuth from '../../Hooks/UseAuth';
import {TbFidgetSpinner} from 'react-icons/tb'

const Login = () => {
    const {signIn,signInWithGoogle,loading,} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  // from submit handler
  const handleSubmit = async event =>{
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    try{
     
      //1. user registration
      const result = await signIn(email,password)
      console.log(result)


      //5. get token
      await getToken(result?.user?.email)
      toast.success('logIn successFully')
    //   navigate(from,{replace:true})
    navigate('/')

    }
    catch(err){
      console.log(err)
      toast.error(err.message)
    }
   
  }
  // handleGoogle sign in
  const handleGoogleSignIn = async () =>{
    try{
     
     //1. user registration with google
      const result = await signInWithGoogle()
      console.log(result)

        //2. save user data in the database
        const dbResponse =await savedUser(result?.user)
        console.log(dbResponse)
 

      //3. get token
      await getToken(result?.user?.email)
      toast.success('logIn successFully')
      navigate(from,{replace:true})

    }
    catch(err){
      console.log(err)
      toast.error(err.message)
    }
  }




    return (
        <Container>
            {/* <div className="flex justify-center">
                <div className="h-[90%] w-full md:w-3/4 m-4">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <h1 className="font-semibold text-3xl text-gray-700 m-2">Log In</h1>
                        <div className="flex">
                            <ion-icon name="logo-google"
                                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-violet-600 text-white bg-violet-600 hover:bg-white hover:text-violet-600 text-2xl">
                            </ion-icon>
                            <ion-icon name="logo-facebook"
                                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 text-2xl">
                            </ion-icon>
                        </div>
                        <div className="text-gray-700 font-semibold">  or </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <div className="">
                            <input type="text" placeholder="Email"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"/>
                        </div>
                        <div className="">
                            <input type="password" placeholder="Password"
                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"/>
                        </div>
                        <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
                            <input className="" type="checkbox" id="checkbox" name="checkbox"/>
                                <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">Remember Me</h3>
                        </div>
                    </div>
                    <div className="text-center mt-7">
                        <button
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">login</button>
                    </div>
                    <div className="text-center my-6 flex flex-col">
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                            Password ?</a>
                        <a href="#" className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                            Not a User? Create New Account</a>
                    </div>
                </div>
            </div> */}
            <div className="min-h-screen text-gray-900 flex justify-center">
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
                <img src="https://i.ibb.co/D4Qxr4H/download.png"
                    className="w-32 mx-auto" />
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div className="w-full flex-1 mt-8">
                    <div className="flex flex-col items-center">
                        <button
                        onClick={handleGoogleSignIn}
                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign Up with Google
                            </span>
                        </button>
                    </div>

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or sign up with e-mail
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" name='email' placeholder="Email" />
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" 
                            name='password'
                            placeholder="Password" />
                        <button
                            className="mt-5 tracking-wide font-semibold bg-[#ea062b] text-gray-100 w-full py-4 rounded-lg hover:bg-[#ea062b] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                            {
                loading? <TbFidgetSpinner className='animate-spin m-auto'/> : 'Signup'
              }
                            </span>
                        </button>
                        <p className="mt-6 text-xl text-gray-600 text-center">
                           Are You new? 
                           <Link to='/register' className='text-[#ea062b]'>SignUp Now</Link>
                          
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex-1  text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center flex justify-center items-center bg-no-repeat">
                <img src="https://i.ibb.co/pL4DgHD/alexandre-boucey-YEx-N-Wg-ILh-E-unsplash.jpg" alt="" />
            </div>
        </div>
    </div>
</div>

    
        </Container>
    );
};

export default Login;