import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";
import DepartmentsTable from "./DepartmentsTable";
import ModalAddDepartments from "./ModalAddDepartments";
import { departments } from "./data";
import { IoAddCircleSharp } from "react-icons/io5";
import { StoreContext } from "@/store/storeContext";
import { setIsAdd, setIsSettingsOpen } from "@/store/storeAction";
const DepartmentsList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataEdit, setDataEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setDataEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);
  return (
    <>
      <Header avatar="AG" />
      <div className="flex gap-3 min-h-[calc(100vh-50px)]">
        <Navigation menu="settings" submenu="departments" />
        <div className=" p-4 w-full">
          <div className="list-content flex justify-between items-center mb-10">
            <h2>Department's List</h2>
            <button className="btn-add " onClick={handleAdd}>
              <IoAddCircleSharp size={15} />
              Add
            </button>
          </div>
          <DepartmentsTable setDataEdit={setDataEdit} />
        </div>
      </div>
      {store.isAdd && <ModalAddDepartments dataEdit={dataEdit} />}
    </>
  );
};

export default DepartmentsList;
