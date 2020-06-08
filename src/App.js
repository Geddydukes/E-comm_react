import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./config/routes";
import "./App.css";
import UserContext from "./context/UserContext";
import UserModel from "./models/user";

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("uid"));

  const storeUser = (userId) => {
    setCurrentUser(userId);
    localStorage.setItem("uid", userId);
  };

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("uid");
    UserModel.logout().then((res) => {
      console.log(res);
      setCurrentUser(null);
      props.history.push("/");
    });
  };

  return (
    <UserContext.Provider value={{ currentUser, storeUser, logout }}>
      <div className="App">
        <Header currentUser={currentUser} logout={logout} />
        <Routes currentUser={currentUser} storeUser={storeUser} />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default withRouter(App);
