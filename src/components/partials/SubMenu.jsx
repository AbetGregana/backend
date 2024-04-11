import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ menu }) => {
  return (
    <div className="pt-2 ml-5">
      <ul className="flex flex-col gap-2 ">
        <li
          className={`px-2 py-1 ${menu === "departments" ? "bg-red-400" : ""}`}
        >
          <Link to="/settings/departments">Departments</Link>
        </li>
        <li>Jobs</li>
        <li>Position</li>
      </ul>
    </div>
  );
};

export default SubMenu;
