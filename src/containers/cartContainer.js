import React, { useContext, useState } from "react";
import CheckoutButton from "../components/CheckoutButton";
import UserContext from "../context/UserContext";

const CartContainer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart } = useContext(UserContext);
  const [total, setTotal] = useState(0);

  // let Price = cart.map((product) => {
  //   let runningTotal = total + product.price;
  //   setTotal(runningTotal);
  //   return <span>{total}</span>;
  // });

  let MyCart = cart.map((product, index) => {
    setTotal(total + product.price);
    return (
      <span>
        <h5 key={index}>
          {product.name}: {product.price}
        </h5>
      </span>
    );
  });
  console.log(total);
  return (
    <div>
      {cart ? MyCart : ""}
      {total}
      <CheckoutButton />
    </div>
  );
};

export default CartContainer;
