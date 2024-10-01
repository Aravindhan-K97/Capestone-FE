import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { assignRole } from "../Redux/Slice/employeeSlice";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const { Id } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteEmployee, setDeleteEmployee] = useState([]);

  //Function to fetch all the employees
  const fetchEmployees = async () => {
    try {
      await axios.get("https://role-based-access-control-system-backend.onrender.com/api/get-all-emp").then((res) => {
        toast.success(res.data.message);
        setEmployees(res.data.result);
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  //Function to dispatch the id of the employee
  const handleAssignRole = (id) => {
    dispatch(assignRole(id));
    navigate(`/assignrole/${Id}`);
  };

  //Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`https://role-based-access-control-system-backend.onrender.com/api/delete-employee/${id}`)
        .then((res) => {
          toast.success(res.data.message);
          setDeleteEmployee(res.data);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, [deleteEmployee]);
  return (
    <div className="container">
      <div className="row">
        <div className="col mb-3">
          <h1 className="text-center heading">Employees</h1>
        </div>
      </div>
      <div className="table-responsive row">
        <table className="table text-center shadow col">
          <thead className="table-heading">
            <tr className="shadow">
              <th className="shadow">User Name</th>
              <th className="shadow">Email</th>
              <th className="shadow">Date Of Joining</th>
              <th className="shadow">Role</th>
              <th className="shadow">Department</th>
              <th colSpan={2} className="shadow">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee._id} className="shadow">
                  <td className="shadow">{employee.userName}</td>
                  <td className="shadow">{employee.email}</td>
                  <td className="shadow">
                    {employee.dateOfJoining.slice(0, 10)}
                  </td>
                  <td className="shadow">
                    {employee.role ? employee.role.role : "Not Yet Assigned"}
                  </td>
                  <td className="shadow">
                    {employee.department
                      ? employee.department.departmentName
                      : "Not Yet Assigned"}
                  </td>
                  {employee.role ? (
                    <td className="shadow">
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => handleAssignRole(employee._id)}
                      >
                        Update Role
                      </button>
                    </td>
                  ) : (
                    <td className="shadow">
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => handleAssignRole(employee._id)}
                      >
                        Assign Role
                      </button>
                    </td>
                  )}
                  <td className="shadow">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DashboardButton />
      </div>
    </div>
  );
};

export default Employees;
