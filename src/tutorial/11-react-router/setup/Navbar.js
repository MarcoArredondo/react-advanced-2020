import React from "react";
//Importing a link from React Router
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/people">Peolple</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
