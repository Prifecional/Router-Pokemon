import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Pokemon 1</Link>
          </li>
          <li>
            <Link to="/squirtle">Pokemon 2</Link>
          </li>
          <li>
            <Link to="/charmander">Pokemon 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
