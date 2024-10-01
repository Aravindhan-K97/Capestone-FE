import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const AssignRole = () => {
  const { Id } = useSelector((state) => state.employee);
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const [assignRole, setAssignRole] = useState({
    userName: "",
    email: "",
    role: "",
    department: "",
  });

  //Formik schema to validate the form
  const validationSchema = Yup.object().shape({
    role: Yup.string().required("Role is Required"),
    department: Yup.string().required("Department is required"),
  });

  useEffect(() => {
    fetchData();
    fetchDepartment();
    fetchRoles();
  }, []);

  //Function to fetch the data of the employee to assign role
  const fetchData = async () => {
    try {
      await axios
        .get(`https://capestone-be.onrender.com/api/employee-assign-role/${Id}`)
        .then((res) => {
          setAssignRole({
            ...res.data.result, //spread the data fetched
            role: res.data.result.role ? res.data.result.role._id : "", // Check if role exists
            department: res.data.result.department
              ? res.data.result.department._id
              : "", // Check if department exists
          });
          toast.success(res.data.message);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Function to fetch all the departments
  const fetchDepartment = async () => {
    try {
      await axios
        .get("https://capestone-be.onrender.com/api/department/get-departments")
        .then((res) => {
          setDepartments(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Function to fetch all the roles
  const fetchRoles = async () => {
    try {
      await axios
        .get("https://capestone-be.onrender.com/api/role/get-roles")
        .then((res) => {
          setRoles(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: assignRole,
    validationSchema: validationSchema,

    //Function to update the employee role and department
    onSubmit: async (values) => {
      try {
        await axios
          .put(`https://capestone-be.onrender.com/api/assign-role/${Id}`, values)
          .then((res) => {
            toast.success(res.data.message);
            setAssignRole(res.data.result);
            navigate("/employees");
          });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });

  useEffect(() => {
    formik.setValues(assignRole);
  }, [assignRole]);

  return (
    assignRole && (
      <>
        <div className="container d-flex justify-content-center mt-5 box">
          <div className="row">
            <div className="col">
              <form onSubmit={formik.handleSubmit}>
                <fieldset>
                  <legend className="text-center assignRole">
                    Assign Role
                  </legend>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.userName}
                      readOnly
                    />
                  </div>
                  <p className="formik-error">{formik.errors.userName}</p>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      readOnly
                    />
                  </div>
                  <p className="formik-error">{formik.errors.email}</p>
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      name="role"
                      id="role"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.role}
                    >
                      <option>Select</option>
                      {roles.map((ele) => {
                        return (
                          <option key={ele._id} value={ele.role}>
                            {ele.role}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="formik-error">{formik.errors.role}</p>
                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">
                      Department
                    </label>
                    <select
                      name="department"
                      id="department"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.department}
                    >
                      <option>Select</option>
                      {departments.map((department) => {
                        return (
                          <option
                            key={department._id}
                            value={department.departmentName}
                          >
                            {department.departmentName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="formik-error">{formik.errors.department}</p>
                  <button type="submit" className="btn btn-primary button">
                    Assign
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <DashboardButton />
      </>
    )
  );
};

export default AssignRole;
