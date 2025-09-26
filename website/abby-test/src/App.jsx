import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./pages/contact/contact";
import ChangeLog from "./pages/changelog/changelog";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column'
    }}>
      <Router>
        <ScrollToTop />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/changelog" element={<ChangeLog />} />

            {/* Add more routes here as your site grows */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;