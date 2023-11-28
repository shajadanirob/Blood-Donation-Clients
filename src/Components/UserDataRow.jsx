import { useState } from "react"
import UpdateUserModal from "./UpdateUserModal/UpdateUserModal"
import { updateRole } from "../Api/Auth"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
const UserDataRow = ({ user ,refetch}) => {
    const [isOpen,setIsOpen] = useState(false)
    const modalHandler = async role =>{
     try{
       const data = await updateRole({email: user?.email,role})
       console.log(data)
       refetch()
       toast.success('user role update')
     }
     catch(error){
        console.log(error)
        toast.error(error.message)
     }
    }
    return (
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div>
            <div className='block relative'>
              <img
                alt='profile'
                src={user?.image}

                className='rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {user?.status ? (
            <p
              className={`${
                user.status === 'active' ? 'text-green-500' : 'text-yellow-500'
              } whitespace-no-wrap`}
            >
              {user.status}
            </p>
          ) : (
            <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
          )}
        </td>
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span   onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
          
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Update Role</span>
          </span>
          {/* Modal */}
          <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen}
          modalHandler={modalHandler} user={user}
          />
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {/* to={`/user/${user.email}`} */}
          <Link >
          <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Update Status</span>
          </span>
          </Link>
          {/* Modal */}
    
        </td>
                 

      </tr>
    )
  }
  
  export default UserDataRow