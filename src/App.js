import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./config/routes";
import UserContext from "./context/UserContext";
import { logoutUser } from "./models/user";
import "./App.css";

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("uid"));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("Cart")) || []
  );
  const [total, setTotal] = useState(localStorage.getItem("Total") || 0);

  useEffect(() => {
    localStorage.setItem("Total", total);
  }, [total]);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const myCart = [...cart];
    myCart.push(item);
    setCart([...myCart]);
    setTotal(parseInt(total) + item.price);
  };

  const takeFromCart = (item) => {
    const goneItem = item;
    const myItems = [...cart].filter((items, index) => {
      return index !== goneItem.index;
    });
    setCart([...myItems]);
    setTotal(total - item.product.price);
  };

  const storeUser = (userId) => {
    setCurrentUser(userId);
    localStorage.setItem("uid", userId);
  };

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("uid");
    logoutUser().then((res) => {
      console.log(res);
      setCurrentUser(null);
      props.history.push("/");
    });
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        storeUser,
        logout,
        cart,
        addToCart,
        takeFromCart,
        total,
        setTotal,
      }}
    >
      <div className="appContainer">
        <Header />
        <Routes />
      </div>
    </UserContext.Provider>
  );
}

export default withRouter(App);
