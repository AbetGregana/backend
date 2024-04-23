import { setIsSettingsOpen, setIsShow } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";
import React, { useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import ModalSideWrapper from "./modal/ModalSideWrapper";

// import { AiOutlineMenuUnfold } from "react-icons/ai";
const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleOpen = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };
  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
  };

  //used for closing when clicked outside the component
  // let navRef = useRef();
  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!navRef.current.contains(event.target)) {
  //       dispatch(setIsShow(false));
  //       console.log(navRef.current);
  //     }
  //   };
  //   document.addEventListener("click", handler);
  //   return () => {
  //     document.removeEventListener("click", handler);
  //   };
  // });
  return (
    <>
      {store.isShow && <ModalSideWrapper />}
      <div className="navigation">
        <div className="navigation-wrapper">
          <div
            className={`navigation-content duration-200
            -translate-x-[200px] w-[200px] z-[999] ${
              store.isShow ? "translate-x-0" : "-translate-x-[200px]"
            }`}
          >
            <a href="#" className="flex justify-center p-2">
              <img
                src="/src/components/partials/svg-icon/logo-fbs.png"
                alt=""
                className="w-[10rem]"
              />
            </a>
            <nav className="w-[200px]">
              <ul className="overflow-auto h-full pt-2">
                <li
                  className={`px-5 py-2 flex items-center justify-between ${
                    menu === "settings" ? "bg-white text-[#1c74e9]" : ""
                  }`}
                  onClick={handleOpen}
                >
                  SETTINGS
                  <GoChevronDown
                    size={15}
                    className={`duration-200 ${
                      store.isSettingsOpen && "-rotate-180 duration-200"
                    }`}
                  />
                </li>
                {store.isSettingsOpen && (
                  <div className="submenu ml-4">
                    <ul className="flex flex-col gap-3 my-3 ">
                      <li
                        className={`${
                          submenu === "departments"
                            ? "border-l-2 border-[#1c74e9] text-[#1c74e9]"
                            : ""
                        }`}
                        onClick={handleShow}
                      >
                        <Link to="/settings/departments">Departments</Link>
                      </li>
                      <li
                        className={`${
                          submenu === "services"
                            ? "border-l-2 border-accent text-[#1c74e9]"
                            : ""
                        }`}
                        onClick={handleShow}
                      >
                        <Link to="/settings/services">Services</Link>
                      </li>
                      <li
                        className={`${
                          submenu === "position"
                            ? "border-l-2 border-[#1c74e9] text-[#1c74e9]"
                            : ""
                        }`}
                        onClick={handleShow}
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
                  onClick={handleShow}
                >
                  <Link to="/table-freeze">TABLE FREEZE</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`toggle-menu duration-200 translate-x-0  ${
              !store.isShow && "translate-x-[-200px]"
            }`}
          >
            {store.isShow ? (
              <AiOutlineMenuFold
                size={25}
                onClick={handleShow}
                className="hover:text-[#1c74e9]"
              />
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                onClick={handleShow}
                className="hover:text-[#1c74e9]"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
