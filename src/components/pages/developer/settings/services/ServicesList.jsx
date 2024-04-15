import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";
import ServicesTable from "./ServicesTable";
import { IoAddCircleSharp } from "react-icons/io5";
import { StoreContext } from "@/store/storeContext";
import { setIsAdd, setIsSettingsOpen } from "@/store/storeAction";
import ModalAddServices from "./ModalAddServices";

const ServicesList = () => {
  // const [isEdit, setIsEdit] = React.useState(false);
  const { store, dispatch } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);
  return (
    <>
      <Header avatar="AG" />
      <div className="flex gap-3 min-h-[calc(100vh-69px)]">
        <Navigation menu="settings" submenu="services" />
        <div className=" p-4 w-full">
          <div className="list-content flex justify-between items-center mb-10">
            <h2>Services List</h2>
            <button className="btn-add" onClick={handleAdd}>
              <IoAddCircleSharp size={15} />
              Add
            </button>
          </div>
          <ServicesTable />
        </div>
      </div>
      {store.isAdd && <ModalAddServices setIsAdd={setIsAdd} />}
    </>
  );
};

export default ServicesList;
