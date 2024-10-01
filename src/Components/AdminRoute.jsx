import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { currentUser } = useSelector((state) => state.employee);
  return currentUser && currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default AdminRoute;
