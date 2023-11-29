import { useLoaderData } from "react-router-dom";

const BLogDetails = () => {
    const loader = useLoaderData()
    return (
        <div className="my-20">
           <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      
        <div class="py-8">
            <h1 class="text-3xl  font-bold mb-2">{loader.blogsName}</h1>
        </div>

       
        <img src={loader.imageData.data.display_url} alt="Featured image" class="w-full h-auto mb-8"/>

 
        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p> {loader.description} </p>
        </div>
    </div>
</div>
        </div>
    );
};

export default BLogDetails;