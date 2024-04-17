import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { setIsAdd } from "@/store/storeAction";
import { StoreContext } from "@/store/storeContext";
import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import TableFreezeTable from "./TableFreezeTable";

const TableFreezeList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataEdit, setDataEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setDataEdit(null);
  };
  return (
    <>
      <Header avatar="AG" />
      <div className="flex min-h-[calc(100vh-70px)]">
        <Navigation menu="table-freeze" />
        <div className=" p-4 pb-0 w-full">
          <div className="list-content">
            <h2>Table's List</h2>
            {/* <button className="btn-add " onClick={handleAdd}>
              <IoAddCircleSharp size={15} />
              Add
            </button> */}
          </div>
          <TableFreezeTable />
          {/* <DepartmentsTable setDataEdit={setDataEdit} /> */}
        </div>
      </div>
    </>
  );
};

export default TableFreezeList;
