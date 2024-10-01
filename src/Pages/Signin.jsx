import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/Slice/employeeSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Formik validation schema to validate the form
  const validationSchema = Yup.object().shape({
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

    //Function to login
    onSubmit: async (values) => {
      try {
        await axios
          .post("https://role-based-access-control-system-backend.onrender.com/api/login-emp", values)
          .then((res) => {
            setFormData(res.data);
            toast.success(res.data.message);
            localStorage.setItem("Token", res.data.userDetail.token);
            dispatch(signInSuccess(res.data.userDetail));
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
      <div className="container d-flex justify-content-center mt-5 box">
        <div className="row">
          <div className="col">
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend className="text-center signin">Sign In</legend>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Your Email"
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
                <button type="submit" className="btn btn-primary button">
                  Sign In
                </button>
              </fieldset>
            </form>
            <div className="mt-2">
              <Link to="/forgotpw">Forgot Password?</Link>
              <br />
              <span className="mt-2">Do not have an account? </span>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
