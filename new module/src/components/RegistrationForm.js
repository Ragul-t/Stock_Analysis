import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./app.css"; // Existing styles
import "../Registerform.css"; // Override styles

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h4>Registration Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">Company name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Company ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter company id"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Location</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter location"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Pincode</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Pincode"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
