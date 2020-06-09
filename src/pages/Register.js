import React, { useState } from "react";
import { createUser } from "../models/user";

const Register = (props) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    code: "customer",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const adminAccess = () => {
    setUserData({ code: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(userData).then((res) => {
      console.log(res);
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        code: "customer",
      });
      props.history.push("/login");
    });
  };
  return (
    <div>
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={userData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            onChange={handleChange}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={userData.phoneNumber}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            type="text"
            id="address"
            name="address"
            value={userData.address}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            value={userData.password}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password2"
            name="password2"
            value={userData.password2}
          />
        </div>

        <div className="radio">
          <label>
            <input type="radio" value={userData.code} />
            Customer
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={userData.code} onChange={adminAccess} />
            Admin
          </label>
        </div>
        {userData.code ? (
          ""
        ) : (
          <div className="form-group">
            <label htmlFor="code">Code</label>
            <input
              onChange={handleChange}
              type="code"
              id="code"
              name="code"
              value={userData.code}
            />
          </div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
