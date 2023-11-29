import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";

const AdminRote = ({children}) => {
    const{role,isLoading} = useRole()
    console.log(role)

    if(isLoading) return <>
    <div className="flex items-center justify-center h-screen">
<div className="relative">
    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
    </div>
</div>
</div>
    </>
    if(role === 'admin') return children


    return <Navigate to='/dashboard'/>
};

export default AdminRote;