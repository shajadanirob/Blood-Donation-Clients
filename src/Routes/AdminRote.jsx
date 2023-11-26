import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";

const AdminRote = ({children}) => {
    const{role,isLoading} = useRole()
    console.log(role)

    if(isLoading) return <p>loading</p>
    if(role === 'admin') return children


    return <Navigate to='/dashboard'/>
};

export default AdminRote;