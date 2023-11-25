import axios from 'axios'
import { ClearCookie } from './Auth'
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

// 
axiosSecure.interceptors.response.use(response => response,async(error) =>{
    console.log('error tarkced interseptor',error.response)
    if(error.response && error.response.status === 400 || error.response.status === 403){
        await ClearCookie()
        window.location.replace('/login')
    }
    return Promise.reject(error)
})
export default axiosSecure