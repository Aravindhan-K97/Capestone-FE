import React from "react";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <section className="hero-section bg-body-secondary text-center">
          <div className="container">
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Welcome to ManageX InfoNet, your trusted partner in e-commerce
              solutions.
            </p>
          </div>
        </section>
        <section className="about-content py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Our Mission</h2>
                <p>
                  At ManageX InfoNet, our mission is to empower
                  organizations with seamless e-commerce management, leveraging
                  technology to drive efficiency and growth.
                </p>
              </div>
              <div className="col-md-6">
                <h2>Our Vision</h2>
                <p>
                  We envision a world where businesses can thrive with the right
                  tools, and our platform is at the heart of this
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Meet the Team</h2>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="team-member">
                  <h5>John Smith </h5>
                  <p className="text-muted">CEO & Founder</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="team-member">
                  <h5>Jane Johnson </h5>
                  <p className="text-muted">Chief Technical Officer</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="team-member">
                  <h5>Emily Doe </h5>
                  <p className="text-muted">Head of Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
