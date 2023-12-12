import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import axios from "axios";
import SingleBlogCard from "./SingleBlogCard";
import { Helmet } from "react-helmet";


const HomeBlogs = () => {
    const [blogs ,setBlogs] = useState([])
    useEffect(() =>{
        axios.get('https://blood-donation-server-gules.vercel.app/blogs')
        .then(res => setBlogs(res.data))
    },[])
    console.log(blogs)
    return (
        <div className="my-20">
             <Helmet>
            <title>All Blogs</title>
          </Helmet>
           <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
           {
                blogs.map(blog => <SingleBlogCard key={blog._id}
                blog={blog}></SingleBlogCard>)
            }
           </div>
           </Container>
        </div>
    );
};

export default HomeBlogs;