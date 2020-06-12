import React from "react";
import ProductShow from "../components/ProductShow";

const ProductShowContainer = (props) => {
  return (
    <div className="productContainer">
      <ProductShow product={props.product} />
    </div>
  );
};

export default ProductShowContainer;
