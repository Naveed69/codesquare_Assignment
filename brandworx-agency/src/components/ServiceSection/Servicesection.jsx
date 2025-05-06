import "./Servicesection.css";
import vectorImg from "../../Assests/Vector 2.png";
import ringsSide from "../../Assests/Rings-side.png";
import { WorkWithUs } from "../WorkWithus/WorkWithUs";
export const Servicesection = () => {
  return (
    <div className="service-section" id="about">
      <div className="agency-container">
        <p>Agency That can Help You grow your Business Digitally</p>
        <span>
          Work in the Digital World includes Web Design, Digital Marketing,
        </span>
        <br />
        <span>Branding & Strategy, Etc...</span>
      </div>

      <img src={vectorImg} alt="vector" className="imgvector2" />
      <img src={ringsSide} alt="ring" className="imgrings" />

      <div className="work-Togeather-container">
        <p>Let’s Work Together With Our Us</p>
        <span style={{ fontSize: "12px" }}>
          Partner with us to bring your vision to life through collaboration,
          innovation, and tailored
        </span>
        <br />
        <span style={{ fontSize: "12px" }}>
          solutions that meet your unique needs. Together, we'll create
          something extraordinary.
        </span>
      </div>
      <WorkWithUs />
    </div>
  );
};
