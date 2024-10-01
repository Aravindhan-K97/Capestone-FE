import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="d-flex justify-content-center mb-3 mt-3">
      <button
        className="btn btn-primary btn-lg dashboard-button"
        onClick={handleClick}
      >
       Back To Dashboard
      </button>
    </div>
  );
};

export default DashboardButton;
