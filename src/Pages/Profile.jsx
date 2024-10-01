import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.employee);
  const [employee, setEmployee] = useState({
    userName: "",
    email: "",
    role: "",
    responsibilities: "",
    department: "",
  });
  const navigate = useNavigate();

  //Function to fetch details of logged in employee
  const fetchData = async () => {
    try {
      await axios(
        `https://capestone-be.onrender.com/api/get-employee-by-id/${currentUser._id}`
      ).then((res) => {
        setEmployee(res.data.result);
        toast.success(res.data.message);
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Formik Schema to validate form
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("User Name Cannot be Empty")
      .matches(
        /^[a-zA-Z0-9_\.]+$/,
        "Usernames can only contain uppercase or lowercase letters(A-Z or a-z), numbers, dot(.), underscore(_)"
      ),
    email: Yup.string()
      .required("Email Cannot be Empty")
      .matches(
        /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Format"
      ),
  });

  useEffect(() => {
    formik.setValues(employee);
  }, [employee]);

  const formik = useFormik({
    initialValues: employee,
    validationSchema: validationSchema,

    //Function to update the employee profile
    onSubmit: async (values) => {
      try {
        await axios
          .put(
            `https://capestone-be.onrender.com/api/update-employee/${currentUser._id}`,
            values
          )
          .then((res) => {
            setEmployee(res.data.result);
            toast.success(res.data.message);
            navigate("/dashboard");
          });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center mt-4 mb-4 box">
        <div className="row">
          <div className="col">
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend className="text-center">Profile</legend>
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
                  />
                </div>
                <p className="formik-error">{formik.errors.email}</p>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    className="form-control"
                    defaultValue={formik.values.role.role}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="responsibilities" className="form-label">
                    Responsibilities
                  </label>
                  <input
                    type="text"
                    id="responsibilities"
                    name="responsibilities"
                    className="form-control"
                    defaultValue={formik.values.role.responsibilities}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="form-control"
                    defaultValue={
                      formik.values.department
                        ? formik.values.department.departmentName
                        : "Not Yet Assigned"
                    }
                    readOnly
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-outline-success">
                    Update
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <DashboardButton />
    </>
  );
};

export default Profile;
