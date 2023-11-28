import MenuItem from "./DashBoard/MenuItem";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlinePullRequest } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";

const DonnorMenu = () => {
    return (
        <div>
              <MenuItem
                icon={AiOutlinePullRequest }
                label='My Donation Request'
                address='myDonationReq'
              />
              <MenuItem
                icon={AiOutlinePullRequest }
                label='Donet my Donation Request'
                address='donationReq'
              />
              <MenuItem
                icon={IoIosAddCircle }
                label='create Donation Request'
                address='createDonation'
              />
              
        </div>
    );
};

export default DonnorMenu;