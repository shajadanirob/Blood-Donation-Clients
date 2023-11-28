import axiosSecure from "./Index"


// save user data in the database
export const savedUser = async AllData =>{
    const currentUser = {
        email : AllData.email,
        role : 'donor',
        status:'active',
        name: AllData.name,
        bloodGroup: AllData.bloodGroup,
        district: AllData.district,
        upeZila: AllData.upajila,
        image : AllData.imageData.data.display_url
        
        
    }
    const {data} = await axiosSecure.patch(`/users/${AllData?.email}`,currentUser)
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
    const {data} = await axiosSecure.get(`/users/${email}`)
    return data.role
}
// get all user
export const getAllUser =async()  =>{
    const {data} = await axiosSecure.get(`/users`)
    return data
}
// update role
export const updateRole = async ({email,role,status}) =>{
    const currentUser = {
      email,role,status
      
        
        
    }
    const {data} = await axiosSecure.put(`/users/update/${email}`,currentUser)
    return data
}
// update status
