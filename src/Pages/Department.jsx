import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setDepartmentId } from "../Redux/Slice/departmentSlice";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { departmentId } = useSelector((state) => state.department);
  const [deleteDepartment, setDeleteDepartment] = useState([]);

  //Fetch when the component is mounting
  useEffect(() => {
    fetchData();
  }, []);

  //Function to fetch all the departments
  const fetchData = async () => {
    try {
      await axios
        .get("https://capestone-be.onrender.com/api/department/get-departments")
        .then((res) => {
          toast.success(res.data.message);
          setDepartments(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Function to navigate to create page
  const handleClick = () => {
    navigate("/createdepartment");
  };

  //Function to dispatch the id of the department that is to be edited
  const handleEdit = (id) => {
    dispatch(setDepartmentId(id));
    navigate(`/editdepartment/${departmentId}`);
  };

  //Function to handle delete
  const handleDelete = async (id) => {
    try {
      dispatch(setDepartmentId(id));
      await axios
        .delete(
          `https://capestone-be.onrender.com/api/department/delete-department/${departmentId}`
        )
        .then((res) => {
          toast.success(res.data.message);
          setDeleteDepartment(res.data);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  //Fetch whenever a department is deleted
  useEffect(() => {
    fetchData();
  }, [deleteDepartment]);
  return (
    <div className="container">
      <div className="row">
        <div className="col mb-3">
          <h1 className="text-center heading">Departments</h1>
        </div>
      </div>
      <div className="table-responsive row">
        <table className="table text-center shadow col">
          <thead className="table-heading">
            <tr className="shadow">
              <th className="shadow">Department Name</th>
              <th className="shadow">Description</th>
              <th colSpan="2" className="shadow">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => {
              return (
                <tr key={department._id} className="shadow">
                  <td className="shadow">{department.departmentName}</td>
                  <td className="shadow">{department.description}</td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-info"
                      onClick={() => handleEdit(department._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(department._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-success" onClick={handleClick}>
            Create
          </button>
        </div>
      </div>
      <DashboardButton />
    </div>
  );
};

export default Department;
