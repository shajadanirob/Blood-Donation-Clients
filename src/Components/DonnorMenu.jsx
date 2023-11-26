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
                address='donationReq'
              />
              <MenuItem
                icon={IoIosAddCircle }
                label='create Donation Request'
                address='createDonation'
              />
              <MenuItem
                icon={MdManageAccounts  }
                label='manage Donation Request'
                address='manage'
              />
        </div>
    );
};

export default DonnorMenu;