import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const AllBlog = () => {
    const [blogs,setBlogs] =useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/blogs')
        .then(res => setBlogs(res.data))
    },[])

    const handleDelete = id => {
        console.log(id)
        axios.delete(`http://localhost:5000/blogs/delete/${id}`)
        .then(res => {
            console.log(res.data)
            toast.success('your blog delete succussFully')
        })
       
    }

    return (
        <div>
            <Container>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>total</th>
        <th>Image</th>
        <th>blogs Name</th>
        <th>Drescription</th>
        <th>Update</th>
        <th>Delete</th>
    
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        blogs.map((blog,index) => <tr key={blog._id}>
            <th>{index + 1}</th>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div>
            <div className='block relative'>
              <img
                alt='profile'
                src={blog?.imageData.data.display_url}

                className='rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
        </td>
            <td>{blog.blogsName}</td>
            <td>{blog.description.slice(0,100)}</td>
           
            <td>
              <Link className=" text-[#ea062b]" to={`/blogs/updated/${blog._id}`}>
              update
              </Link>
            </td>
            <td>
            <button onClick={() =>handleDelete(blog._id)} className="btn bg-[#ea062b] text-white">
              delete
              </button>
            </td>
            
        
           
          </tr>)
    }
      
     
    </tbody>
  </table>
</div>
            </Container>
        </div>
    );
};

export default AllBlog;