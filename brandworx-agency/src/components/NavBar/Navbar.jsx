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
      <div className="navbar">
        <a
          href="#home"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </a>
        <a
          href="#about"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          About
        </a>
        <a
          href="#services"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Services
        </a>
        <a
          href="#portfolio"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Portfolio
        </a>
        <a
          href="#contactus"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </div>
      <div className="contact-navbar">
        <p>Contact Us</p>
        <span className="contact-arrow">&#8599;</span>
      </div>
    </header>
  );
};
