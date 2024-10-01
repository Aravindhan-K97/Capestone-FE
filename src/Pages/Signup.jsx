import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  //Fetching all the roles to display in the sign up form
  const fetchRoles = async () => {
    try {
      await axios
        .get("https://role-based-access-control-system-backend.onrender.com/api/role/get-roles")
        .then((res) => {
          setRoles(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  //Formik validation schema to validate the form
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("Username cannot be empty")
      .matches(
        /^[a-zA-Z0-9_\.]+$/,
        "Usernames can only contain uppercase or lowercase letters(A-Z or a-z), numbers, dot(.), underscore(_)"
      ),
    email: Yup.string()
      .required("Email cannot be empty")
      .matches(
        /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Format"
      ),
    password: Yup.string()
      .required("Password cannot be empty")
      .matches(
        /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password should range between 6 and 16 characters and should contain at least one number and one special character"
      ),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,

    //Function to submit the data collected from the form
    onSubmit: async (values) => {
      try {
        await axios
          .post("https://role-based-access-control-system-backend.onrender.com/api/register-emp", values)
          .then((res) => {
            setFormData(res.data);
            toast.success(res.data.message);
            navigate("/signin");
          });
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-wrap justify-content-center mt-5 box">
        <div className="row">
          <div className="col">
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend className="text-center signup">Sign Up</legend>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="form-control"
                    placeholder="Enter Your User Name"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                  />
                </div>
                <p className="formik-error">{formik.errors.userName}</p>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Id
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <p className="formik-error">{formik.errors.email}</p>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                <p className="formik-error">{formik.errors.password}</p>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    className="form-control"
                    value={formik.values.role}
                    onChange={formik.handleChange}
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
                <button type="submit" className="btn btn-primary button">
                  Sign Up
                </button>
              </fieldset>
            </form>
            <div className="mt-2">
              <span>Already have an account? </span>
              <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
