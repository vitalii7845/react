import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  // return <div className="product">{`Product is a ${productId}`}</div>;
  return <div className="product">{productId}</div>;
}

export default Product;
