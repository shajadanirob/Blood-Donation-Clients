/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";


const SingleBlogCard = ({blog}) => {
    return (
        <div>
        
  

<article
  class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
>
  <img
    alt="Office"
    src={blog.imageData.data.display_url}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
       {blog.blogsName}
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {blog.description.slice(0,100)}
    </p>

    <Link
      to={`/blogs/${blog._id}`}
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &rarr;
      </span>
    </Link>
  </div>
</article> 
        </div>
    );
};

export default SingleBlogCard;