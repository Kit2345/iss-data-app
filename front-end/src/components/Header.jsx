import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>RPF software engineer apprentice challenge 🚀</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/position">
          <button>Position</button>
        </Link>
        <Link to="/astros">
          <button>Astros</button>
        </Link>
      </nav>
    </header>
  );
}
