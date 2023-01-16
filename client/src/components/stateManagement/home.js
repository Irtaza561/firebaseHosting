import React from "react";
import { Link } from "react-router-dom";
import './styling.css'

export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <h2>Welcome To Home</h2>
        <Link to='/base'>
          <button>Create Your Pizza</button>
        </Link>
      </div>
    </>
  );
}
