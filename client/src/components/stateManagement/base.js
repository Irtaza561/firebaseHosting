import React from "react";
import { Link } from "react-router-dom";
import "./styling.css";
import {motion} from 'framer-motion'

export default function Base({ addBase, pizza }) {
  const bases = ["Classic", "Crispy & Thick", "Crust & Thin", "Nawabi"];
  console.log(pizza.base)
  return (
    <>
      <div className="mainContainer">
        <h2>Step1: Choose Your Base</h2>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <motion.li
                whileHover={{scale: 1.3, originX: 0, color: '#fe8112'}}
                transition={{type: 'spring', stiffness: '300'}}
                key={base}
                onClick={() => {
                  addBase(base);
                }}
              >
                <span className={spanClass}>{base}</span>
              </motion.li>
            );
          })}
        </ul>
        {
        
        pizza.base !== " " && (
          <div className="next">
            <Link to="/topping">
              <button>Next</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
