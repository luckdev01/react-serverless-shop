import React from 'react';
import './Product.css';

export default ({ onAddToCartClick, price, title }) => (
  <div className="Product">
    <h2 className="Product-title">{title}</h2>
    <div className="Product-price">${price}</div>
    <button className="Product-buy-button" onClick={onAddToCartClick}>
      Add to cart
    </button>
  </div>
);
