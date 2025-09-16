import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        {/* Add more routes here as your site grows */}
      </Routes>
    </Router>
  );
}

export default App;