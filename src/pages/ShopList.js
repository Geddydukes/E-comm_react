import React from "react";
import ProductContainer from "../containers/productContainer";
import CartContainer from "../containers/CartContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ShopList = () => {
  return (
    <div>
      <Row>
        <Col sm={8} className="columnRow">
          <ProductContainer />
        </Col>
        <Col sm={4} className="columnRow">
          <CartContainer />
        </Col>
      </Row>
    </div>
  );
};

export default ShopList;
