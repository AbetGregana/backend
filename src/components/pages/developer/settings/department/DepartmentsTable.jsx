import React from "react";
import { departments } from "./data";
const DepartmentsTable = () => {
  let count = 1;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Supervisor</th>
            <th>Supervisor Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((child) => {
            return (
              <tr key={child.aid}>
                <td>{count++}</td>
                <td>{child.department_name}</td>
                <td>{child.supervisor}</td>
                <td>{child.supervisor_email}</td>
                <td>{child.isActive}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentsTable;
