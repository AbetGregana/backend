import React from "react";

const Header = ({ avatar }) => {
  return (
    <header className="border-b border-gray-200 p-2 flex justify-between">
      <a href="#">Logo</a>
      <div className="w-[40px] h-[40px] bg-red-300 rounded-full grid place-content-center">
        {avatar}
      </div>
    </header>
  );
};

export default Header;
