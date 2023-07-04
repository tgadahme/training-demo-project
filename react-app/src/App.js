import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";

export default function App() {
  return (
    <div className="App">
      {/* Router component for handling navigation */}
      <Router>
        {/* Navbar component for displaying navigation links */}
        <Navbar />

        {/* Routes component for defining different routes and their corresponding components */}
        <Routes>
          {/* Route for the Home page */}
          <Route exact path="/" element={<Home />} />

          {/* Route for the About page */}
          <Route path="/about" element={<About />} />

          {/* Route for the Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Route for the Store page */}
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}
