import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import axios from "axios";
import CampagingCard from "./CampagingCard";

const Campaging = () => {
    const [blogs ,setBlogs] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:5000/campaigns')
        .then(res => setBlogs(res.data))
    },[])
    console.log(blogs)
    return (
        <div>
<Container>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
           {
                blogs.map(blog => <CampagingCard key={blog._id}
                blog={blog}></CampagingCard>)
            }
           </div>
</Container>
        </div>
    );
};

export default Campaging;