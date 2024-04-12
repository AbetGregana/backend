import React from "react";

const Header = ({ avatar }) => {
  return (
    <header className="border-b-2 border-[#1c74e9] px-5 py-2 flex justify-between">
      <a href="#">
        <img src="/src/components/partials/svg-icon/logo-fbs.png" alt="" />
      </a>
      <div className="w-[40px] h-[40px] bg-red-300 rounded-full grid place-content-center">
        {avatar}
      </div>
    </header>
  );
};

export default Header;
