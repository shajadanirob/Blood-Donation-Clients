import { useLoaderData } from "react-router-dom";


const CampagingDetail = () => {
    const loader = useLoaderData()
    return (
        <div>
                   <div>
<div className="max-w-7xl mx-auto px-4 my-24 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
       
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">{loader.campaginsName}</h1>
            <p className="text-gray-500 text-sm">Date and time <time datetime="2022-04-05">{loader.campagingsDate}, {loader.campagingsTime}</time></p>
            <p className="text-gray-500 text-sm">Address <time datetime="2022-04-05">{loader.campagingsAddress}</time></p>
        </div>

        
        <img src={loader.imageData.data.display_url} alt="Featured image" className="w-full h-auto mb-8"/>

        
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        <p>
        {loader.description}
        </p>
        </div>
    </div>
</div>
        </div>
        </div>
    );
};

export default CampagingDetail;