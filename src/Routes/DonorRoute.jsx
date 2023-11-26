/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";


const DonorRoute = ({children}) => {
    const{role,loading} = useRole()
    console.log(role)

    if(loading) return <p>loading</p>
    if(role === 'donor') return children


    return <Navigate to='/dashboard'/>

};

export default DonorRoute;