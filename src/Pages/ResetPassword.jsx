import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const payload = { password, confirmPassword };
  const navigate = useNavigate();
  const { id, token } = useParams();

  //Function to reset password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `https://role-based-access-control-system-backend.onrender.com/api/reset-password/${id}/${token}`,
          payload
        )
        .then((res) => {
          toast.success(res.data.message);
          navigate("/signin");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-wrap justify-content-center mt-5 box">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend className="text-center signup">Reset Password</legend>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
