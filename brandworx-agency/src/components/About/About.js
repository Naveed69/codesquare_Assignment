import "./About.css";
import logo from "../../Assests/aboutLogo.png";
import arrow from "../../Assests/Up arrow.png";
export const About = () => {
  return (
    <div className="about-cointenar" id="contactus">
      <img src={logo} alt="logo" className="about-logo" />
      <div>
        <p className="address">
          2nd Floor, ShreeComplex
          <br />
          Plot No. 42, Sector 18 <br />
          Koramangala, Bengaluru - <br />
          560095 Karnataka, India
        </p>
        <p className="phone">
          <u>+91-9008888569</u>
        </p>
        <p className="email">
          <u>naveed.desai.69@gmail.com</u>
        </p>
      </div>
      <div className="services">
        <p>About</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Contact Us</p>
      </div>
      <div className="social-accounts">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Instagram</p>
      </div>
      <a href="#home">
        <img src={arrow} alt="arrow" className="arrow" />
      </a>
      <p className="rights-reserved">© 2025 Brandworx. All rights reserved.</p>
    </div>
  );
};
