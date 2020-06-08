import React, { useState, useContext } from "react";
import { loginUser } from "../models/user";
import UserContext from "../context/UserContext";

const Login = async (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const { storeUser } = useContext(UserContext);

  const handleChange = (event) => {
    setLoginData({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(loginData)
      .then((res) => {
        console.log(res);
        if (!res.data) {
          setLoginData({
            email: "",
            password: "",
            message: res.message,
          });
          return false;
        }
        storeUser(res.data);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h4>Login</h4>
      {loginData.message ? loginData.message : ""}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={loginData.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="password"
            id="password"
            name="password"
            value={loginData.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
