import React from "react";
import SubMenu from "./SubMenu";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
const Navigation = ({ menu }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="w-[300px]">
        <ul className="h-full p-4 bg-gray-200 space-y-1 ">
          <li
            className={`px-2 py-1 flex items-center justify-between ${
              menu === "settings" ? "bg-white text-[#1c74e9] rounded-md" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Settings
            <GoChevronDown size={15} />
          </li>
          {isOpen && (
            <div className=" ml-5">
              <ul className="flex flex-col gap-2 ">
                <li>
                  <Link to="/settings/departments">Departments</Link>
                </li>
                <li>
                  <Link to="/settings/services">Services</Link>
                </li>
                <li>
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
