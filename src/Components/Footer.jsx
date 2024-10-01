import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FaHome, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container border-top footer-container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              <FaHome color="rgb(84, 13, 239)" size="25" title="Home" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://github.com/Johnvilin-Sibina"
              target="_blank"
              className="nav-link px-2 text-body-secondary"
            >
              <IoLogoGithub color="rgb(84, 13, 239)" size="25" title="GitHub" />
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="https://linkedin.com/in/johnvilin-sibina-j-5ba45425a"
              target="_blank"
              className="nav-link px-2 text-body-secondary"
            >
              <FaLinkedin color="rgb(84, 13, 239)" size="22" title="Linkedin" />
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary copy-write">
          © {new Date().getFullYear()} Johnvilin Sibina
        </p>
      </footer>
    </div>
  );
};

export default Footer;
