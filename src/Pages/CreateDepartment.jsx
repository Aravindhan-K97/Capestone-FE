import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateDepartment = () => {
  const [formData, setFormData] = useState({
    departmentName: "",
    description: "",
  });
  const navigate = useNavigate();

  //Formik schema to validate form
  const validationSchema = Yup.object().shape({
    departmentName: Yup.string()
      .required("Department cannot be empty")
      .matches(/^[a-zA-Z][a-zA-Z ]*$/, "Only Alphabet and Space is Allowed"),
    description: Yup.string()
      .required("Description cannot be empty")
      .matches(/^[a-zA-Z][a-zA-Z ]*$/, "Only Alphabet and Space is Allowed"),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,

    //Function to create a new department
    onSubmit: async (values) => {
      try {
        await axios
          .post(
            "https://capestone-be.onrender.com/api/department/create-department",
            values
          )
          .then((res) => {
            setFormData(res.data);
            toast.success(res.data.message);
            navigate("/getdepartments");
          });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center mt-5 box">
        <div className="row">
          <div className="col">
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend className="text-center">Create Department</legend>
                <div className="mb-3">
                  <label htmlFor="departmentName" className="form-label">
                    Department Name
                  </label>
                  <input
                    type="text"
                    id="departmentName"
                    className="form-control"
                    placeholder="Enter the Department Name"
                    value={formik.values.departmentName}
                    onChange={formik.handleChange}
                  />
                </div>
                <p className="formik-error">{formik.errors.departmentName}</p>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    rows="5"
                    cols="30"
                    name="description"
                    id="description"
                    className="form-control"
                    placeholder="Enter the Department Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>
                <p className="formik-error">{formik.errors.description}</p>
                <div className="mb-3">
                  <button type="submit" className="btn btn-success">
                    Create
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

export default CreateDepartment;
