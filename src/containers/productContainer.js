import React, { useState, useEffect } from "react";
import { indexProducts } from "../models/product";
import Product from "../components/Product";
import CardDeck from "react-bootstrap/CardDeck";

const ProductContainer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    grabProducts();
  }, []);

  const grabProducts = async () => {
    let myProducts = await indexProducts();
    setProducts(myProducts.products);
  };

  let productList = products.map((product, index) => {
    return <Product product={product} index={index} key={index} />;
  });

  return (
    <div className="productContainer">
      <h1>All Products</h1>
      <CardDeck>{products ? productList : "Loading"}</CardDeck>
    </div>
  );
};

export default ProductContainer;
