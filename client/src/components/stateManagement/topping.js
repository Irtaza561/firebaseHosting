import React from "react";
import { Link } from "react-router-dom";
import './styling.css'
import {motion} from 'framer-motion'

export default function Topping({addTopping, pizza}) {
    const toppings = ['mushroom', 'onnion', 'pepper', 'olives', 'extra chesse', 'tomatoes']
  return (
    <>
      <div className="mainContainer">
        <h2>Step2: Choose Your Toppings</h2>
        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping) ? 'active': '';
            return (
              <motion.li
              whileHover={{scale: 1.3, originX: 0, color: '#fe8112'}}
                transition={{type: 'spring', stiffness: '300'}}
                key={topping}
                onClick={() => {
                  addTopping(topping);
                }}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            );
          })}
        </ul>
        {pizza.toppings && (
          <Link to="/order">
            <button>Order</button>
          </Link>
        )}
      </div>
    </>
  );
}