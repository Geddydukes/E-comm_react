import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
  </Switch>
);
