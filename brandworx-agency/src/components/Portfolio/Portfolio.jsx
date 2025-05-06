import "./Portfolio.css";
import vector3 from "../../Assests/Vector 3.png";
import banner from "../../Assests/Banner.png";
import group from "../../Assests/Group.png";
import card1 from "../../Assests/UI Design1.png";
import card2 from "../../Assests/UI Design2.png";
import card3 from "../../Assests/UI Design3.png";
import card4 from "../../Assests/UI Design4.png";
import { PortfolioCard } from "./PortfolioCard";

export const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <img src={vector3} alt="vector3" className="vector3" />
      <img src={banner} alt="banner" className="banner" />
      <img src={group} alt="group" className="group" />
      <div className="portfolios-container">
        <p>Our Projects</p>
        <span>Explore our projects to see how we've turned ideas into</span>
        <br />
        <span>
          impactful solutions. Each project reflects our commitment to{" "}
        </span>
        <br />
        <span>quality, creativity, and results. </span>
      </div>
      <button type="button" className="portfolio-btn">
        All Portfollio <span className="roundbtn">&#8599;</span>
      </button>
      <div className="portfolio-cards">
        <PortfolioCard
          img={card1}
          text={"Web Design Project"}
          heading={"MStore"}
        />
        <PortfolioCard img={card2} text={"Branding"} heading={"Beauty"} />
        <PortfolioCard
          img={card3}
          text={"Landing Page Design "}
          heading={"Jual"}
        />
        <PortfolioCard img={card4} text={"Branding"} heading={"MangStore"} />
      </div>
    </div>
  );
};
