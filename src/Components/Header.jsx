import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="navbar sticky-top bg-dark flex-md-nowrap shadow p-2"
      data-bs-theme="dark"
    >
      <Link
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        to="/"
      >
        TradePulse
      </Link>
      <ul className="navbar-nav flex-row d-md-none">
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle search"
          >
            <svg className="bi">
              <use xlinkHref="#search" />
            </svg>
          </button>
        </li>
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu />
          </button>
        </li>
      </ul>
      <div id="navbarSearch" className="navbar-search w-100 collapse">
        <input
          className="form-control w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </header>
  );
};

export default Header;
