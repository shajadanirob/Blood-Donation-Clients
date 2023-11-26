
import { BiGridHorizontal } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa6";
import MenuItem from "./DashBoard/MenuItem";
const Volunteer = () => {
    return (
        <div>

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
        </div>
    );
};

export default Volunteer;