import React from "react";
import ProductShowContainer from "../containers/ProductShowContainer";
import CartContainer from "../containers/CartContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ShopShow = (props) => {
  let product = props.location.state.product;
  return (
    <div>
      <Row>
        <Col sm={8} className="columnRow">
          <ProductShowContainer product={product} />
        </Col>
        <Col sm={4} className="columnRow">
          <CartContainer />
        </Col>
      </Row>
    </div>
  );
};

export default ShopShow;
