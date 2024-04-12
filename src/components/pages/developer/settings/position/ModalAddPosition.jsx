import ModalSideWrapper from "@/components/partials/modal/ModalSideWrapper";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const ModalAddPosition = ({ setIsAdd }) => {
  const handleClose = () => {
    setIsAdd(false);
  };
  return (
    <>
      <ModalSideWrapper>
        <main className="flex flex-col  mb-5 max-w-[400px] w-full bg-white p-5">
          <div className="flex justify-between items-center mb-5">
            <h2>Add Service</h2>
            <button onClick={handleClose}>
              <MdOutlineClose />
            </button>
          </div>

          <form action="">
            <div className="grow">
              <div className="input-wrapper">
                <label htmlFor="">Position</label>
                <input type="text" />
                <small>Error</small>
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Department</label>
                <input type="text" />
                <small>Error</small>
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Supervisor</label>
                <input type="text" />
                <small>Error</small>
              </div>
            </div>
          </form>
          <div className="form-action flex gap-2">
            <button className="px-5 py-2 bg-red-600 text-white" type="submit">
              Save
            </button>
            <button
              className="px-5 py-2 bg-gray-200 text-gray-900"
              type="reset"
              onClick={handleClose}
            >
              Discard
            </button>
          </div>
        </main>
      </ModalSideWrapper>
    </>
  );
};

export default ModalAddPosition;
