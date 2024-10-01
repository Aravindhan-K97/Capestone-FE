import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";
import Employees from "./Pages/Employees";
import AdminRoute from "./Components/AdminRoute";
import AssignRole from "./Pages/AssignRole";
import CreateDepartment from "./Pages/CreateDepartment";
import Department from "./Pages/Department";
import EditDepartment from "./Pages/EditDepartment";
import CreateRole from "./Pages/CreateRole";
import Role from "./Pages/Role";
import EditRole from "./Pages/EditRole";
import RolePromotionReport from "./Pages/RolePromotionReport";
import WorkPeriodReport from "./Pages/WorkPeriodReport";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<AdminRoute />}>
              <Route path="/employees" element={<Employees />} />
              <Route path="/assignrole/:id" element={<AssignRole />} />
              <Route path="/getdepartments" element={<Department />} />
              <Route path="/createdepartment" element={<CreateDepartment />} />
              <Route path="/editdepartment/:id" element={<EditDepartment />} />
              <Route path="/getroles" element={<Role />} />
              <Route path="/createrole" element={<CreateRole />} />
              <Route path="/editrole/:id" element={<EditRole />} />
              <Route
                path="/rolepromotionreport"
                element={<RolePromotionReport />}
              />
              <Route path="/workperiodreport" element={<WorkPeriodReport />} />
            </Route>
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpw" element={<ForgotPassword />} />
          <Route path="/resetpw/:id/:token" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
