import { setIsAdd, setIsShow } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";
import React from "react";

const ModalSideWrapper = (props) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleCloseAll = () => {
    dispatch(setIsAdd(false));
    dispatch(setIsShow(false));
  };
  return (
    <div className=" fixed top-0 left-0 h-full w-full flex justify-end z-50">
      <div
        className=" backdrop bg-black/80 h-full w-full absolute top-0 left-0 z-[-1] "
        onClick={handleCloseAll}
      ></div>
      {props.children}
    </div>
  );
};

export default ModalSideWrapper;
