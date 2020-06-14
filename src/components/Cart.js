import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserContext from "../context/UserContext";

const Cart = (props) => {
  const { takeFromCart } = useContext(UserContext);

  return (
    <div>
      <Card body>
        {props.product.name}: {props.product.price}
        <Button variant="danger" onClick={() => takeFromCart(props)}>
          Remove
        </Button>
      </Card>
    </div>
  );
};

export default Cart;
