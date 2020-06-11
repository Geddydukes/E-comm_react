import React, { useContext } from "react";
import ProductContainer from "../containers/ProductContainer";
import CartContainer from "../containers/CartContainer";

const ShopList = () => {
  return (
    <div>
      <ProductContainer />
      <CartContainer />
    </div>
  );
};

export default ShopList;
