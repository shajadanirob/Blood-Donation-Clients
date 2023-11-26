import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../../../Api/Auth";
import { Link } from "react-router-dom";
import Container from "../../../Shared/Container";
import { Helmet } from "react-helmet";
import UserDataRow from "../../UserDataRow";


const Alluser = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn :async () => await getAllUser(),

    })
    console.log(users)
    return (
        <div>
             <Container>
      {/* <div className="overflow-x-auto">
  <table className="table table-zebra">
   
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th> name</th>
        <th>email</th>
        <th>status</th>
        <th>Change status</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  
    {
        users.map((user,index) => <tr key={user._id}>
            <th>{index + 1}</th>
            <td>
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
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.donationTime}</td>
        
            <td>
                <Link to={`${user._id}`}>
                <button  className="btn btn-sm">Update</button>
                </Link>
                </td>
            <td>
                <Link to={`${user._id}`}>
                <button  className="btn btn-sm">Delete</button>
                </Link>
                </td>
          </tr>)
    }
      
     
    </tbody>
  </table>
</div> */}





<div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{users.map(user => <UserDataRow key={user._id} user={user}/>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>








      </Container>
        </div>
    );
};

export default Alluser;