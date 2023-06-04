import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">${price}</p>
          <div className="product__rating">⭐️⭐️⭐️⭐️⭐️{rating}</div>
        </div>
        <img src={image} alt="product-image" />
      </div>
    </div>
  );
}

export default Product;
