import React from "react";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const Navigation = ({ menu }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-[300px]">
        <ul className="h-full mt-5 p-4 bg-gray-200 space-y-4 ">
          <li
            className={`px-2 py-1 ${menu === "children" ? "bg-red-400" : ""}`}
          >
            <Link to="/children">Children</Link>
          </li>
          <li className={`px-2 py-1 ${menu === "parent" ? "bg-red-400" : ""}`}>
            <Link to="/parent">Parent</Link>
          </li>
          <li className={`px-2 py-1 ${menu === "reports" ? "bg-red-400" : ""}`}>
            <Link to="/reports">Reports</Link>
          </li>
          <li
            className={`px-2 py-1 ${menu === "settings" ? "bg-red-400" : ""}`}
            onClick={handleOpen}
          >
            Settings
            {isOpen && <SubMenu />}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
