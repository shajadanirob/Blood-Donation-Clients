import axiosSecure from "./Index"
// get all donation req
export const getAllDonationReq = async () => {
    const {data} = await axiosSecure.get('/donationReq')
    return data
}

// fetch all donation req for donor
export const getDonorDonationReq = async(email) =>{
    const {data} = await axiosSecure.get(`/donationReq/${email}`)
    return data
}


// get single donation req
export const getSingleDonationReq = async id => {
    const {data} = await axiosSecure.get(`/donationReqe/${id}`)
    return data
}
// save a data in database
export const addDonationReq =async (DoantionReqData) =>{
    const {data} = await axiosSecure.post('/donationReq',DoantionReqData)
    return data
}