import axiosSecure from "./Index"


// save user data in the database
export const savedUser = async AllData =>{
    const currentUser = {
        email : AllData.email,
        role : 'Volunteer',
        status:'active',
        name: AllData.name,
        bloodGroup: AllData.bloodGroup,
        district: AllData.district,
        upeZila: AllData.upajila,
        image : AllData.imageData.data.display_url
        
        
    }
    const {data} = await axiosSecure.put(`/users/${AllData?.email}`,currentUser)
    return data
}

// get token from database

export const getToken = async email =>{
    const {data} = await axiosSecure.post(`/jwt`,email)
    console.log('token receve from database---->',data)
    return data
}

// clear token from browser 
export const ClearCookie = async () =>{
    const {data} = await axiosSecure.get(`/logout`)
    return data
}

// get user role 
export const getRole =async email =>{
    const {data} = await axiosSecure(`/users/${email}`)
    return data.role
}