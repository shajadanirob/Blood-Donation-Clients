
import MenuItem from './DashBoard/MenuItem';
import { FaUsers } from "react-icons/fa";
import { BiGridHorizontal } from "react-icons/bi";
import { BsGraphUp } from 'react-icons/bs'
import { FaBlogger } from "react-icons/fa6";
const AdminMenu = () => {
    return (
        <div>
              <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='Statistics'
              />
              <MenuItem
                icon={  FaUsers}
                label='All User'
                address='users '
              />
              <MenuItem
                icon={  BiGridHorizontal }
                label='All Donation request'
                address='allDonation'
              />
               <MenuItem
                icon={FaBlogger   }
                label='Add Blog'
                address='addBlog'
              />
               <MenuItem
                icon={FaBlogger   }
                label='manage Blog'
                address='allBlog'
              />
        </div>
    );
};

export default AdminMenu;