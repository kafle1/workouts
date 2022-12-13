import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Workout Buddy</h1>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
