import { Navbar } from "./NavBar/Navbar";
import "./Home.css";
import { Servicesection } from "./ServiceSection/Servicesection";
import { Portfolio } from "./Portfolio/Portfolio";
export const Home = () => {
  return (
    <div className="hero-section" id="home">
      <Navbar />
      <div className="content-hero">
        <span className="social-media">
          <div class="fa cursor">&#xf16d;</div>
          <div class="fa cursor">&#xf232;</div>
          <div class="fa cursor">&#xf08c;</div>
          <div class="fa cursor">&#xf099;</div>
        </span>
        <div className="hero-name-container">
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
            <span>Good CEO, and Clean Design</span>
          </p>
          <button className="get-Started-btn cursor">Get Sarted</button>
        </div>
        <div class="circle-text-container">
          <svg viewBox="0 0 200 200" class="circle-svg">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text fill="white" font-size="24" font-family="Poppins">
              <textPath href="#circlePath" startOffset="0%">
                s c r o l l &nbsp; d o w n &nbsp; f o r &nbsp; w o r k &nbsp; t
                o g e t h e r
              </textPath>
            </text>
          </svg>
          <div class="center-text">🖱</div>
        </div>
      </div>
      <Servicesection />
      <Portfolio />
    </div>
  );
};
