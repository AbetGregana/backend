import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";

const Departments = () => {
  return (
    <>
      <Header avatar="AG" />
      <div className="flex gap-3 min-h-[calc(100vh-50px)]">
        <Navigation menu="departments" />
      </div>
    </>
  );
};

export default Departments;
