import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";


const AdminVolntiRoute = ({children}) => {
    const{role,isLoading} = useRole()
    console.log(role)

    if(isLoading) return <p>loading</p>
    if(role === 'admin' || role === 'Volunteer') return children


    return <Navigate to='/dashboard'/>
};

export default AdminVolntiRoute;