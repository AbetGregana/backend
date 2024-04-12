import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";
import DepartmentsTable from "./DepartmentsTable";
import ModalAddDepartments from "./ModalAddDepartments";
import { departments } from "./data";
import { IoAddCircleSharp } from "react-icons/io5";
const DepartmentsList = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState(null);

  const handleAdd = () => {
    setIsAdd(true);
    setDataEdit(null);
  };
  console.log(dataEdit);
  return (
    <>
      <Header avatar="AG" />
      <div className="flex gap-3 min-h-[calc(100vh-50px)]">
        <Navigation menu="departments" />
        <div className=" p-4 w-full">
          <div className="list-content flex justify-between items-center mb-10">
            <h2 className="text-2xl mb-5 font-bold">Department's List</h2>
            <button className="btn-add " onClick={handleAdd}>
              <IoAddCircleSharp size={15} />
              Add
            </button>
          </div>
          <DepartmentsTable
            departments={departments}
            setIsAdd={setIsAdd}
            setDataEdit={setDataEdit}
          />
        </div>
      </div>
      {isAdd && <ModalAddDepartments setIsAdd={setIsAdd} dataEdit={dataEdit} />}
    </>
  );
};

export default DepartmentsList;
