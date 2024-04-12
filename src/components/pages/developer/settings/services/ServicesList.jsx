import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";
import ServicesTable from "./ServicesTable";
import ModalAddService from "./ModalAddService";
import { IoAddCircleSharp } from "react-icons/io5";

const ServicesList = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const handleAdd = () => {
    setIsAdd(true);
  };
  return (
    <>
      <Header avatar="AG" />
      <div className="flex gap-3 min-h-[calc(100vh-69px)]">
        <Navigation menu="jobs" />
        <div className="list-content p-4 w-full">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl mb-5 font-bold">Services List</h2>
            <button className="btn-add" onClick={handleAdd}>
              <IoAddCircleSharp size={15} />
              Add
            </button>
          </div>
          <ServicesTable />
        </div>
      </div>
      {isAdd && <ModalAddService setIsAdd={setIsAdd} />}
    </>
  );
};

export default ServicesList;
