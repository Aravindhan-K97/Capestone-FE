import React from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { TbCircleLetterD } from "react-icons/tb";
import { TbCircleLetterR } from "react-icons/tb";
import { IoDocumentsSharp } from "react-icons/io5";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../Redux/Slice/employeeSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  //Function to perform sign out
  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem("Token");
  };
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            TradePulse
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/employees"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <FaUsersGear />
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/getdepartments"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <TbCircleLetterD size="23" />
                Departments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/getroles"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <TbCircleLetterR size="23" />
                Roles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <FaUserAlt size={15} />
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/rolepromotionreport"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <IoDocumentsSharp size={15} />
                Promotion Report
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/workperiodreport"
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
              >
                <IoDocumentsSharp size={15} />
                Work Period Report
              </Link>
            </li>
          </ul>
          <hr className="my-3" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2 sidebar-link"
                role="button"
                onClick={handleSignOut}
              >
                <FaSignOutAlt />
                SignOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
