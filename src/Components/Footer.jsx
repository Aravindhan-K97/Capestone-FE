import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaHome, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <footer className="py-0 my-0">
        <ul className="nav justify-content-center border-bottom pb-1 mb-1">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              <FaHome color="rgb(84, 13, 239)" size="25" title="Home" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://github.com/Aravindhan-K97"
              target="_blank"
              className="nav-link px-2 text-body-secondary"
            >
              <IoLogoGithub color="rgb(84, 13, 239)" size="25" title="GitHub" />
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="https://www.linkedin.com/in/aravindhan-k-351394312/"
              target="_blank"
              className="nav-link px-2 text-body-secondary"
            >
              <FaLinkedin color="rgb(84, 13, 239)" size="25" title="Linkedin" />
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary copy-write">
          © {new Date().getFullYear()} Aravindhan.K
        </p>
      </footer>
    </div>
  );
};

export default Footer;
