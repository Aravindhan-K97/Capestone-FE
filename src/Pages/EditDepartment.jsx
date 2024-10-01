import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const EditDepartment = () => {
  const navigate = useNavigate();
  const { departmentId } = useSelector((state) => state.department);
  const [editDepartment, setEditDepartment] = useState({
    departmentName: "",
    description: "",
  });

  //Formik schema to validate form
  const validationSchema = Yup.object().shape({
    departmentName: Yup.string()
      .required("Department Name Cannot be Empty")
      .matches(/^[a-zA-Z][a-zA-Z ]*$/, "Only Alphabet and Space is Allowed"),
    description: Yup.string()
      .required("Description Cannot be Empty")
      .matches(/^[a-zA-Z][a-zA-Z ]*$/, "Only Alphabet and Space is Allowed"),
  });

  //Function the fetch the department to edit
  const fetchData = async () => {
    try {
      await axios
        .get(
          `https://role-based-access-control-system-backend.onrender.com/api/department/get-department-by-id/${departmentId}`
        )
        .then((res) => {
          toast.success(res.data.message);
          setEditDepartment(res.data.result);
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    formik.setValues(editDepartment);
  }, [editDepartment]);

  const formik = useFormik({
    initialValues: editDepartment,
    validationSchema: validationSchema,

    //Function to updated to edited department details
    onSubmit: async (values) => {
      try {
        await axios
          .put(
            `https://role-based-access-control-system-backend.onrender.com/api/department/edit-department/${departmentId}`,
            values
          )
          .then((res) => {
            setEditDepartment(res.data.result);
            toast.success(res.data.message);
            navigate("/getdepartments");
          });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    editDepartment && (
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
    )
  );
};

export default EditDepartment;
