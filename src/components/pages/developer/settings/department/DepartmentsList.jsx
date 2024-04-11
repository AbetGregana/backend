import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";
import DepartmentsTable from "./DepartmentsTable";

const DepartmentsList = () => {
  return (
    <>
      <Header avatar="AG" />
      <div className="flex gap-3 min-h-[calc(100vh-50px)]">
        <Navigation menu="departments" />
        <div className="p-4 w-full">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl mb-5 font-bold">Department's List</h2>
            <button className="py-2 px-4 bg-red-700 text-white">Add</button>
          </div>
          <DepartmentsTable />
        </div>
      </div>
    </>
  );
};

export default DepartmentsList;
