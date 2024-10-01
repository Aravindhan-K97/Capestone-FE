import React from "react";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ 
        backgroundImage: `url('images/19187761.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}> 
        <div className="row">
          <div className="jumbotron text-center align-items-center">
            <h1 className="display-3">Welcome to ManageX InfoNet</h1>
            <p className="lead fw-normal">
              Your central hub for all things related to our company.
            </p>
            <div>
              <hr className="border border-dark" />
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
