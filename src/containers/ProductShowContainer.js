import React from "react";
import ProductShow from "../components/ProductShow";

const ProductShowContainer = (props) => {
  return (
    <div className="productContainer">
      <h1>{props.product.name}</h1>
      <ProductShow product={props.product} />
    </div>
  );
};

export default ProductShowContainer;
