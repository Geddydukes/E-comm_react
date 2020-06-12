import React, { useContext } from "react";
import ProductContainer from "../containers/ProductContainer";
import CartContainer from "../containers/CartContainer";
import Container from "react-bootstrap/Container";
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
