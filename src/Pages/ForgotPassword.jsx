import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  //Function to send mail to reset password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://role-based-access-control-system-backend.onrender.com/api/forgot-password", { email })
        .then((res) => {
          toast.success(res.data.message);
          navigate("/signin");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-wrap justify-content-center mt-5 box">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend className="text-center signup">Forgot Password</legend>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Id
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Mail
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

export default ForgotPassword;
