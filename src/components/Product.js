import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Product = (props) => {
  const { addToCart } = useContext(UserContext);
  return (
    <div>
      <Card style={{ width: "12rem" }}>
        <Card.Body>
          <Link
            to={{
              pathname: `/product/${props.product._id}`,
              state: { product: props.product },
            }}
            key={props.index.index}
          >
            <Card.Title>{props.product.name}</Card.Title>
          </Link>
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

export default Product;
