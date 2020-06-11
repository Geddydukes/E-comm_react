import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Product = (props) => {
  const { addToCart } = useContext(UserContext);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.product.image} alt={props.name} />
        <Card.Body>
          <Link to={`/products/${props.product._id}`} key={props.index.index}>
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
