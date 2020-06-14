import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserContext from "../context/UserContext";

const ProductShow = (props) => {
  const { addToCart } = useContext(UserContext);
  return (
    <div className="productShow">
      <Card>
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>Price: {props.product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(props.product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductShow;
