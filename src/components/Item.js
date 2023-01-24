import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setClass]=useState(false)

  function handleAddToCart(e){
    setClass(isInCart=>isInCart=!isInCart)
  }
  return (
    <li className={isInCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={isInCart?"remove":"add"}>{isInCart?"Remove":'Add to Cart'}</button>
    </li>
  );
}

export default Item;
