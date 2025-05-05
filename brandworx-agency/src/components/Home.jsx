import { Navbar } from "./NavBar/Navbar";
import "./Home.css";
export const Home = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="content-hero">
        <span className="social-media">
          <div class="fa cursor">&#xf16d;</div>
          <div class="fa cursor">&#xf232;</div>
          <div class="fa cursor">&#xf08c;</div>
          <div class="fa cursor">&#xf099;</div>
        </span>
        <div
          className="hero-name-container"
          style={{
            width: "1100px",
            height: "220px",
          }}
        >
          <p className="hero-name">
            Amazing Digital Creations with{" "}
            <span
              style={{
                color: "#E4E800",
              }}
            >
              Brandworx agency
            </span>
          </p>
          <p className="help-section">
            Help You To Build Digital Solutions That is Modern, User Friendly,
            Good CEO, and Clean Design
          </p>
          <button className="get-Started-btn cursor">Get Sarted</button>
        </div>
      </div>
    </div>
  );
};
