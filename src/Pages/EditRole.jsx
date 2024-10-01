import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const EditRole = () => {
  const navigate = useNavigate();
  const { roleId } = useSelector((state) => state.role);
  const [editRole, setEditRole] = useState({
    role: "",
    responsibilities: "",
  });

  //Formik schema to validate form
  const validationSchema = Yup.object().shape({
    role: Yup.string()
      .required("Role cannot be empty")
      .matches(/^[a-zA-Z][a-zA-Z ]*$/, "Only Alphabet and Space is Allowed"),
    responsibilities: Yup.string()
      .required("Responsibilities cannot be empty")
      .matches(/^[A-Za-z,\s]+$/, "Only Alphabet, Comma and Space is Allowed"),
  });

  //Function to fetch the role to edit
  const fetchData = async () => {
    try {
      await axios
        .get(`https://role-based-access-control-system-backend.onrender.com/api/role/get-role-by-id/${roleId}`)
        .then((res) => {
          toast.success(res.data.message);
          setEditRole(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    formik.setValues(editRole);
  }, [editRole]);

  const formik = useFormik({
    initialValues: editRole,
    validationSchema: validationSchema,

    //Function to update role
    onSubmit: async (values) => {
      try {
        await axios
          .put(`https://role-based-access-control-system-backend.onrender.com/api/role/edit-role/${roleId}`, values)
          .then((res) => {
            setEditRole(res.data.result);
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
                <legend className="text-center">Update Role</legend>
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

export default EditRole;
