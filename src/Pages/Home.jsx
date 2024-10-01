import React from "react";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 home">
        <div className="row">
          <div className="jumbotron text-center col">
            <h1 className="display-3">Welcome to TradePulse Intranet</h1>
            <p className="lead fw-normal">
              Your central hub for all things related to our company.
            </p>
            <div>
              <hr className="my-4 border border-dark" />
              <p className="lead fw-semibold">
                This is a Role Based Access Control Demo Project.
              </p>
              <p className="lead fw-normal">
                Access company resources, view reports, manage employee roles,
                and more.
              </p>
              <a
                className="btn btn-primary btn-lg get-started-btn"
                href="/signup"
                role="button"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
