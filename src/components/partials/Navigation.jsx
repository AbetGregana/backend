import { setIsSettingsOpen } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";
import React from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleOpen = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };
  console.log(setIsSettingsOpen);
  return (
    <>
      <nav className="w-[300px]">
        <ul className="h-full py-4 bg-gray-200 space-y-1 ">
          <li
            className={`px-2 py-2 flex items-center justify-between ${
              menu === "settings" ? "bg-white text-[#1c74e9]" : ""
            }`}
            onClick={handleOpen}
          >
            SETTINGS
            <GoChevronDown size={15} />
          </li>
          {store.isSettingsOpen && (
            <div className="submenu ml-5">
              <ul className="flex flex-col gap-3 mt-3 ">
                <li
                  className={`${
                    submenu === "departments" ? "border-l border-[#1c74e9]" : ""
                  }`}
                >
                  <Link to="/settings/departments">Departments</Link>
                </li>
                <li
                  className={`${
                    submenu === "services"
                      ? "border-l border-accent text-[#1c74e9]"
                      : ""
                  }`}
                >
                  <Link to="/settings/services">Services</Link>
                </li>
                <li
                  className={`${
                    submenu === "position"
                      ? "border-l border-[#1c74e9] text-[#1c74e9]"
                      : ""
                  }`}
                >
                  <Link to="/settings/position">Position</Link>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
