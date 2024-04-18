import { setIsSettingsOpen, setIsShow } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";
import React from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleOpen = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };
  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
  };

  console.log(store.isShow);

  return (
    <>
      <div className="navigation">
        <div className="navigation-wrapper">
          {/* {store.isShow && ( */}
          <div
            className={`navigation-content duration-500 translate-x-0 w-[200px] ${
              store.isShow ? "bg-blue-600 " : "-translate-x-[200px]"
            }`}
          >
            <nav className="w-[200px]">
              <ul className="overflow-auto pt-4  h-full">
                <li
                  className="px-5 py-2 flex items-center justify-between"
                  onClick={handleOpen}
                >
                  SETTINGS
                  <GoChevronDown size={15} />
                </li>
                {store.isSettingsOpen && (
                  <div className="submenu ml-5">
                    <ul className="flex flex-col gap-3 my-3 ">
                      <li
                        className={`${
                          submenu === "departments"
                            ? "border-l-2 border-[#1c74e9] text-[#1c74e9]"
                            : ""
                        }`}
                      >
                        <Link to="/settings/departments">Departments</Link>
                      </li>
                      <li
                        className={`${
                          submenu === "services"
                            ? "border-l-2 border-accent text-[#1c74e9]"
                            : ""
                        }`}
                      >
                        <Link to="/settings/services">Services</Link>
                      </li>
                      <li
                        className={`${
                          submenu === "position"
                            ? "border-l-2 border-[#1c74e9] text-[#1c74e9]"
                            : ""
                        }`}
                      >
                        <Link to="/settings/position">Position</Link>
                      </li>
                    </ul>
                  </div>
                )}
                <li
                  className={`px-5 py-2 flex items-center justify-between ${
                    menu === "table-freeze" ? "bg-white text-[#1c74e9]" : ""
                  }`}
                >
                  <Link to="/table-freeze">TABLE FREEZE</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* // )} */}
          <div
            className={`toggle-menu duration-500 translate-x-0  ${
              !store.isShow && "-translate-x-[200px]"
            }`}
          >
            <AiOutlineMenuFold size={25} onClick={handleShow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
