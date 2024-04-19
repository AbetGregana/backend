import React from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { StoreContext } from "@/store/storeContext";
import { setIsOpen, setIsShow } from "@/store/storeAction";

const Header = ({ avatar }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleOpen = () => {
    dispatch(setIsOpen(!store.isOpen));
  };

  return (
    <>
      <header>
        <div></div>
        <div
          className={`avatar  ${store.isOpen && "border-2 border-blue-950"}`}
          onClick={() => handleOpen()}
        >
          {avatar}
        </div>
        {store.isOpen && (
          <div className="avatar-details">
            <div className="avatar-banner">
              <div className="avatar-img">
                <figure>
                  <FaUser />
                </figure>
              </div>
              <div className="avatar-name">
                <p>Ansbert Gregana - Admin</p>
                <p>
                  <MdOutlineEmail />
                  <span>ansbert.gregana@frontlinebusiness.com.ph</span>
                </p>
              </div>
              <div className="avatar-actions">
                <button>
                  <HiOutlineUserCircle />
                  <span>Account</span>
                </button>
                <button>
                  <IoIosLogOut /> <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
