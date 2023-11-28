import { useLoaderData } from "react-router-dom";
import axiosSecure from "../../Api/Index";
import axios from "axios";


const SingleStatus = () => {
    const user = useLoaderData()
    console.log(user)
    const HandleUpdate = event =>{
       event.preventDefault()
       const form = event.target;
       const status = form.status.value;
       const updateStatus ={statusbar}
       axios.put(`http://localhost:5000/user/updated/${user.email}`,updateStatus)
       .then(res =>{
        console.log(res.data)
        
       })
        console.log(status)
    }
    return (
        <div>
          <form onSubmit={HandleUpdate}>
              
          <select
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" name="status" required>
                                  <option disabled selected value="">change status</option>
                                
                                  <option value='active'>active </option>
                                  <option value='block'>block </option>
               
                           </select>   

                           <button className="btn">Change status</button>
            </form> 
        </div>
    );
};

export default SingleStatus;