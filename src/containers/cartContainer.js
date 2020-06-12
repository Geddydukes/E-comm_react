import React, { useContext } from "react";
import CheckoutButton from "../components/CheckoutButton";
import UserContext from "../context/UserContext";
import Cart from "../components/Cart";

const CartContainer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart, total } = useContext(UserContext);

  let MyCart = cart.map((product, index) => {
    return (
      <span>
        <Cart product={product} key={index} index={index} />
      </span>
    );
  });
  console.log(total);
  return (
    <div className="productContainer">
      <h1>Cart</h1>
      {cart ? MyCart : ""}
      <CheckoutButton />
    </div>
  );
};

export default CartContainer;
