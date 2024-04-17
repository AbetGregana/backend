import React from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { StoreContext } from "@/store/storeContext";
import { setIsActive, setIsOpen } from "@/store/storeAction";
const Header = ({ avatar }) => {
  const toggleM = document.querySelector(".toggle-menu");
  const { store, dispatch } = React.useContext(StoreContext);

  const handleOpen = () => {
    dispatch(setIsOpen(!store.isOpen));
  };

  const handleClick = () => {
    dispatch(setIsActive(store.isActive));
  };

  return (
    <>
      <header>
        <div
          className="toggle-menu"
          onClick={() => {
            toggleM.classList.toggle("open");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#">
          <img src="/src/components/partials/svg-icon/logo-fbs.png" alt="" />
        </a>
        <div
          className={`avatar ${store.isActive ? "border-blue-950" : ""}`}
          onClick={(handleOpen, handleClick)}
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
