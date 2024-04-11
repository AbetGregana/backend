import React from "react";

const ModalSideWrapper = (props) => {
  return (
    <div className="modal fixed top-0 left-0 h-screen w-full flex justify-end">
      <div className=" backdrop bg-black/80 h-full w-full absolute top-0 left-0 z-[-1] "></div>
      {props.children}
    </div>
  );
};

export default ModalSideWrapper;
