import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import DashboardButton from "../Components/DashboardButton";

const CreateRole = () => {
  const [formData, setFormData] = useState({
    role: "",
    responsibilities: "",
  });
  const navigate = useNavigate();

  //Formik schema to validate form
  const validationSchema = Yup.object().shape({
    role: Yup.string()
      .required("Role cannot be empty")
      .matches(/^[a-zA-Z][a-zA-Z ]*$/, "Only Alphabet and Space is Allowed"),
    responsibilities: Yup.string()
      .required("Responsibilities cannot be empty")
      .matches(/^[A-Za-z,\s]+$/, "Only Alphabet, Comma and Space is Allowed"),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,

    //Function to create a new role
    onSubmit: async (values) => {
      try {
        await axios
          .post("https://capestone-be.onrender.com/api/role/create-role", values)
          .then((res) => {
            setFormData(res.data);
            toast.success(res.data.message);
            navigate("/getroles");
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
                <legend className="text-center">Create Role</legend>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="form-control"
                    placeholder="Enter the Role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                  />
                </div>
                <p className="formik-error">{formik.errors.role}</p>
                <div className="mb-3">
                  <label htmlFor="responsibilities" className="form-label">
                    Responsibilities
                  </label>
                  <textarea
                    rows="5"
                    cols="30"
                    name="responsibilities"
                    id="responsibilities"
                    className="form-control"
                    placeholder="Enter the Responsibilities"
                    value={formik.values.responsibilities}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>
                <p className="formik-error">{formik.errors.responsibilities}</p>
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

export default CreateRole;
