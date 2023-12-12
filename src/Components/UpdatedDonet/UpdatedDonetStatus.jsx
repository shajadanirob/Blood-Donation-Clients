import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdatedDonetStatus = () => {
    const loader = useLoaderData()
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const status = form.status.value

    
        // const UpdatedStatus ={
        //     status
        // }
        // http://localhost:5173/donets/status/6564c70ae735641b5c14d87d
        console.log(status)
       axios.put(`https://blood-donation-server-gules.vercel.app/donets/status/${loader._id}`,status)
       .then(res =>{
        console.log(res.data)
        toast.success('your status updated success')
       })
    }
    console.log(loader)
    return (
        <div>
                <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-3l  font-semibold">
              Updated a Status
          </h3>
      </div>
  
      <div className="p-6 space-y-6">
      <form onSubmit={handleSubmit}>
      <div className="mb-5">
    <label className="block mb-2 font-bold text-gray-600">Update statu</label>
    <input  type="text" defaultValue={loader.status} id="twitter" name="status" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>

<button className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">Update Now</button>
</form>
        
      </div>
        </div>
    );
};

export default UpdatedDonetStatus;