import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setRoleId } from "../Redux/Slice/roleSlice";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";


const Role = () => {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteRole, setDeleteRole] = useState([]);

  //Fetch when the component is mounting
  useEffect(() => {
    fetchData();
  }, []);

  //Function to fetch all the roles
  const fetchData = async () => {
    try {
      await axios
        .get("https://capestone-be.onrender.com/api/role/get-roles")
        .then((res) => {
          toast.success(res.data.message);
          setRoles(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Function to navigate to create page
  const handleClick = () => {
    navigate("/createrole");
  };

  //Function to dispatch the id of the role that is to be edited
  const handleEdit = (id) => {
    dispatch(setRoleId(id));
    navigate(`/editrole/${id}`);
  };

  //Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`https://capestone-be.onrender.com/api/role/delete-role/${id}`)
        .then((res) => {
          toast.success(res.data.message);
          setDeleteRole(res.data);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Fetch whenever a role is deleted
  useEffect(() => {
    fetchData();
  }, [deleteRole]);
  return (
    <div className="container">
      <div className="row">
        <div className="col mb-3">
          <h1 className="text-center heading">Roles</h1>
        </div>
      </div>
      <div className="table-responsive row">
        <table className="table text-center shadow col">
          <thead className="table-heading">
            <tr className="shadow">
              <th className="shadow">Role</th>
              <th className="shadow">Responsibilities</th>
              <th colSpan="2" className="shadow">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((ele) => {
              return (
                <tr key={ele._id} className="shadow">
                  <td className="shadow">{ele.role}</td>
                  <td className="shadow">{ele.responsibilities}</td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-info"
                      onClick={() => handleEdit(ele._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(ele._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={handleClick}>
            Create
          </button>
        </div>
      </div>
      <DashboardButton />
    </div>
  );
};

export default Role;
