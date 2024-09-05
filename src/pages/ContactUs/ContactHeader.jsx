import React from "react";

const ContactHeader = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="contact-header">
            <nav className="breadcrumb">
              <a className="breadcrumb-item" href="#">
                Home
              </a>
              <span className="breadcrumb-item active" aria-current="page">
                Contact Us
              </span>
            </nav>
            <div className="contact-info">
              <h2>
                We believe in sustainable products. We’re passionate about you
                and your vehicle lives.
              </h2>
              <p>
                As Vescan continues to expand its offerings, the company is
                poised to become a leader in the automotive repair industry.
                Future developments include the introduction of advanced
                analytics tools that will allow users to track their purchasing
                patterns and optimize their inventory management. Vescan also
                plans to launch a mobile app, further enhancing accessibility
                and convenience for its users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default ContactHeader;
