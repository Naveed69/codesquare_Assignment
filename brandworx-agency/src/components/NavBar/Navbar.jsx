import "./Navbar.css";
export const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="brand-name">
        <div className="logo"></div>
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
      </div>

      <nav class="navbar">
        <button class="menu-toggle" onclick="toggleMenu()">
          ☰
        </button>
        <div className="navbar nav-links" id="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contactus">Contact Us</a>
        </div>
      </nav>
      <div className="contact-navbar">
        <p>Contact Us</p>
        <span className="contact-arrow">&#8599;</span>
      </div>
    </header>
  );
};
