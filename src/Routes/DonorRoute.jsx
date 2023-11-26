/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";


const DonorRoute = ({children}) => {
    const{role,isLoading} = useRole()
    console.log(role)

    if(isLoading) return <p>loading</p>
    if(role === 'donor') return children


    return <Navigate to='/dashboard'/>

};

export default DonorRoute;