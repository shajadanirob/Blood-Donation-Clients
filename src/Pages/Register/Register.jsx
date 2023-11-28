/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { getToken, savedUser } from "../../Api/Auth";
import { imageUpload } from "../../Api/Utilite";

const Register = () => {
    const [Districts,setDistrict] = useState([]);
    const [upeZila,setUpeZila] = useState([]);
    const [passwordMatch, setPasswordMatch] = useState(true); // Added state for password match
    const [confirmPassword, setConfirmPassword] = useState(""); // Added state for confirm password
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

    // firebase 
    const {createUser, signInWithGoogle, updateUserProfile, loading} = useAuth();
    const navigate = useNavigate();

    // from submit handler
    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const bloodGroup = form.blood.value;
        const district = form.district.value;
        const upajila = form.upazila.value;

        try {
            // 1. upload image
            const imageData = await imageUpload(image);

            const allData = {
                name,
                email,
                imageData,
                bloodGroup,
                district,
                upajila
            };

            // Check if passwords match
            if (password === confirmPassword) {
                setPasswordMatch(true);

                // 2. user registration
                const result = await createUser(email, password);

                // 3. save user and profile photo
                await updateUserProfile(
                    name,
                    imageData?.data?.display_url,
                    bloodGroup,
                    district,
                    upajila
                );

                // 4. save user data in the database
                const dbResponse = await savedUser(allData);

                // 5. get token
                await getToken(result?.user?.email);

                toast.success('Sign up successfully');
                navigate('/');
            } else {
                setPasswordMatch(false);
                toast.error("Passwords don't match");
            }
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };

    // handleGoogle sign in
    const handleGoogleSignIn = async () => {
        try {
            // 1. user registration with google
            const result = await signInWithGoogle();

            // 2. save user data in the database
            const dbResponse = await savedUser(result?.user);

            // 3. get token
            await getToken(result?.user?.email);

            toast.success('Sign up successfully');
            navigate('/');
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };








    return (
        <div>
            
            <div className="min-h-screen text-gray-900 flex justify-center">
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
                <img src="https://i.ibb.co/D4Qxr4H/download.png"
                    className="w-32 mx-auto" />
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                Register Now
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
                            Register in with Google
                            </span>
                        </button>
                    </div>

                    <div className="my-12 border-b text-center">
                        <div
                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or Register  with e-mail
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" name="name" required placeholder="name" />

                            
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="email" name="email" required placeholder="email" />
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="file" name="image" required placeholder="image" />

                   

                        <select
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" name="blood" required>
                                  <option disabled selected value="">Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                           </select>  

                        <select
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" name="district" required>
                                  <option disabled selected value="">District</option>
                                  {
                                    Districts.map(dist =>  <option key={dist.id} value={dist.name}>{dist.name}</option>)
                                  }
                 
                 
                           </select>  




                        <select
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" name="upazila" required>
                                  <option disabled selected value="">Upazila</option>
                                  {
                                    upeZila.map(upo =>  <option value={upo.name} key={upo.id}>{upo.name}</option>)
                                  }
                 
               
                           </select>     

                

                           <input
                className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${
                    !passwordMatch ? 'border-red-500' : ''
                }`}
                name="password"
                type="password"
                placeholder="Password"
            />
            <input
                className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${
                    !passwordMatch ? 'border-red-500' : ''
                }`}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />


                        <button
                             className={`mt-5 tracking-wide font-semibold bg-[#ea062b] text-gray-100 w-full py-4 rounded-lg hover:bg-[#ea062b] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${
                                !passwordMatch ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                            disabled={!passwordMatch}>
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                               Register
                            </span>
                        </button>
                        <p className="mt-6 text-xl text-gray-600 text-center">
                           You have account? 
                           <Link to='/login' className='text-[#ea062b]'>Login Now</Link>
                          
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

    
        
        </div>
    );
};

export default Register;