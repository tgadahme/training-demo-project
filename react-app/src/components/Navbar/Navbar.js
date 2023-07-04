/**
 * The Navbar component represents the navigation bar of the application.
 * It includes links to different pages of the app.
 */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand Link */}
      <Link to="/" className="navbar-brand">
        My App
      </Link>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>

        <Link to="/store" className="navbar-link">
          Get Stores
        </Link>

        <Link to="/about" className="navbar-link">
          About
        </Link>

        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
