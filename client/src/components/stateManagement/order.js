import React from "react";
import './styling.css'

export default function Order({pizza}) {
  return (
    <>
      <div className="mainContainer">
        <h2>Thank You For Your Order:</h2>
        <p>You Ordered a {pizza.base} pizza with </p>
        {pizza.toppings.map(topping =><li key={topping}>{topping}</li>)}
      </div>
    </>
  );
}