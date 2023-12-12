import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateBlogs = () => {
    const loader = useLoaderData()
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const blogsName = form.blogsName.value
        const description = form.description.value
       
        const UpdatedBlogs ={
          blogsName,description
        }
        console.log(UpdatedBlogs)
       axios.put(`https://blood-donation-server-gules.vercel.app/blogs/updated/${loader._id}`,UpdatedBlogs)
       .then(res =>{
        console.log(res.data)
        toast.success('your blogs updated success')
       })
    }

    
    return (
        <div>
                 <div>
            <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-3l  font-semibold">
              Updated a Services
          </h3>
      </div>
  
      <div className="p-6 space-y-6">
      <form onSubmit={handleSubmit} >

<div className="mb-5">
    <label className="block mb-2 font-bold text-gray-600">blogsName</label>
    <input  type="text" defaultValue={loader.blogsName} id="twitter" name="blogsName" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>
<div className="mb-5">
    <label className="block mb-2 font-bold text-gray-600">description</label>
    <input  type="text" defaultValue={loader.description} id="twitter" name="description" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
</div>



<button className="inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg">Update Now</button>
</form>
        
      </div>
        </div>
        </div>
    );
};

export default UpdateBlogs;