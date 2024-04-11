import ModalSideWrapper from "@/components/partials/modal/ModalSideWrapper";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const ModalAddDepartments = ({ setIsAdd }) => {
  const handleClose = () => {
    setIsAdd(false);
  };
  return (
    <ModalSideWrapper>
      <main className="flex flex-col  mb-5 max-w-[400px] w-full bg-white p-5">
        <div className="flex justify-between items-center mb-5">
          <h2>Add Department</h2>
          <button onClick={handleClose}>
            <MdOutlineClose />
          </button>
        </div>

        <form action="">
          <div className="input-wrapper">
            <label htmlFor="">Name</label>
            <input type="text" />
            <small>Error</small>
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Name</label>
            <input type="text" />
            <small>Error</small>
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Name</label>
            <input type="text" />
            <small>Error</small>
          </div>
        </form>
        <div className="form-action flex gap-2">
          <button className="px-5 py-2 bg-red-600 text-white" type="submit">
            Save
          </button>
          <button className="px-5 py-2 bg-gray-200 text-gray-900" type="reset">
            Discard
          </button>
        </div>
      </main>
    </ModalSideWrapper>
  );
};

export default ModalAddDepartments;
