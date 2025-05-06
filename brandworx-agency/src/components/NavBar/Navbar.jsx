import { useState, useEffect } from "react";
import "./Navbar.css";
export const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header className="navbar-container">
      <div className="brand-name">
        <div className="logo"></div>
        {windowWidth > 768 && (
          <p
            style={{
              fontSize: "16.2px",
              fontFamily: "Poppins",
              marginLeft: "25px",
              color:
                "background: linear-gradient(333.6deg, #999999 21.9%, #F2FF00 97.42%)",
              fontWeight: "700",
            }}
          >
            Brandworx
          </p>
        )}
      </div>

      <nav className="navbar">
        <button className="menu-toggle cursor" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {windowWidth < 768 && <hr className="topmargin" />}
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contactus">Contact Us</a>
        </div>
      </nav>
      {windowWidth > 768 && (
        <div className="contact-navbar">
          <p>Contact Us</p>
          <span className="contact-arrow">&#8599;</span>
        </div>
      )}
    </header>
  );
};
