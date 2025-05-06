import "./Servicesection.css";
import vectorImg from "../../Assests/Vector 4.png";
import ringsSide from "../../Assests/Rings-side.png";
export const Servicesection = () => {
  return (
    <div className="service-section">
      <div className="agency-container">
        <p>Agency That can Help You grow your Business Digitally</p>
        <span>
          Work in the Digital World includes Web Design, Digital Marketing,
        </span>
        <br />
        <span>Branding & Strategy, Etc...</span>
      </div>
      <img src={vectorImg} alt="vector" className="imgvector4" />
      <img src={ringsSide} alt="ring" className="imgrings" />
    </div>
  );
};
