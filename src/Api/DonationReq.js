import axiosSecure from "./Index"
// get all donation req
export const getAllDonationReq = async () => {
    const {data} = await axiosSecure.get('/donationReq')
    return data
}
// get single donation req
export const getSingleDonationReq = async id => {
    const {data} = await axiosSecure(`/donationReq/${id}`)
    return data
}