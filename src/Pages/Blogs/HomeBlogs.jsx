import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import axios from "axios";
import SingleBlogCard from "./SingleBlogCard";


const HomeBlogs = () => {
    const [blogs ,setBlogs] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/blogs')
        .then(res => setBlogs(res.data))
    },[])
    console.log(blogs)
    return (
        <div className="my-20">
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