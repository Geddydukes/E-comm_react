import React, { useState, useContext } from "react";
import { loginUser } from "../models/user";
import UserContext from "../context/UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const { storeUser } = useContext(UserContext);

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
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
      })
      .catch((err) => console.log(err));
    props.history.push("/");
  };

  return (
    <div className="loginForm">
      <h4>Login</h4>
      {loginData.message ? loginData.message : ""}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="email"
            id="email"
            name="email"
            value={loginData.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="password"
            id="password"
            name="password"
            value={loginData.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
