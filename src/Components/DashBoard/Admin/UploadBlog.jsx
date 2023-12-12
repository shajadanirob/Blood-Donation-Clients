import axios from "axios";
import { imageUpload } from "../../../Api/Utilite";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Blog =  () => {
    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const blogsName = form.blogsName.value;
        const image = form.image.files[0];
        const description = form.description.value;
        
        const imageData =  await imageUpload(image);

        const AllData = {
            blogsName,imageData,description
        }
        console.log(AllData)
        axios.post('https://blood-donation-server-gules.vercel.app/blogs',AllData)
        .then(res =>{
            console.log(res.data)
            toast.success('you blog upload')
        })
    }
    return (
        <div>
             <Helmet>
            <title>Upload Blog</title>
          </Helmet>
         <div className="bg-white border border-4 rounded-lg shadow relative w-full">
            <h3 className="text-3l text-[#ea062b] text-center font-bold">
                Add Blogs
            </h3>

            <div className="flex items-start justify-between p-5 border-b rounded-t"></div>

            <div className="p-6 space-y-6">
               
                <form  onSubmit={handleSubmit} >
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Blogs Name</label>
                            <input type="text" name="blogsName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="blogsName" required />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Photo</label>
                            <input
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            type="file" name="image" required placeholder="image" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Blogs</label>
                            <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description" name="description"></textarea>
                        </div>
                    </div>
                    <div className="p-6 border-t border-gray-200 rounded-b flex items-center justify-center">
                        <button className=" inline-flex text-white bg-[#ea062b] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg" type="submit">Add blogs</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Blog;