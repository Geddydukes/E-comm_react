import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ShopList from "../pages/ShopList";
import ShopShow from "../pages/ShopShow";
import About from "../pages/About";
import Mission from "../pages/Mission";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/login"
      render={(routeProps) => {
        return (
          <Login
            {...routeProps}
            currentUser={props.currentUser}
            storeUser={props.storeUser}
          />
        );
      }}
    />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    <Route path="/shop" component={ShopList} />
    <Route path="/product/:id" component={ShopShow} />
    <Route path="/about" component={About} />
    <Route path="/mission" component={Mission} />
  </Switch>
);

export default Routes;
