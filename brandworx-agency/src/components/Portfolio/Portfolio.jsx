import "./Portfolio.css";
import vector3 from "../../Assests/Vector 3.png";
import vector4 from "../../Assests/Vector 4.png";
import comma from "../../Assests/comma.png";
import banner from "../../Assests/Banner.png";
import group from "../../Assests/Group.png";
import card1 from "../../Assests/UI Design1.png";
import card2 from "../../Assests/UI Design2.png";
import card3 from "../../Assests/UI Design3.png";
import card4 from "../../Assests/UI Design4.png";
import person1 from "../../Assests/persons/person1.png";
import person2 from "../../Assests/persons/person2.png";
import person3 from "../../Assests/persons/person3.png";
import person4 from "../../Assests/persons/person4.png";
import person5 from "../../Assests/persons/person5.png";
import person6 from "../../Assests/persons/person6.png";
import { PortfolioCard } from "./PortfolioCard";
import { PersonCard } from "./PeresonCard";
import { About } from "../About/About";

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
      <img src={vector4} alt="vector4" className="vector4" />
      <div className="about-container">
        <p>What they say about us</p>
        <span>Here form their Point Of View</span>
      </div>
      <img src={comma} alt="comma" className="comma" />
      <div className="person-cards">
        <PersonCard
          person={person1}
          name={"Nugraha"}
          testimo={
            "BrandWorx transformed our brand identity and gave us a fresh, modern look. The results were beyond our expectations!"
          }
        />
        <PersonCard
          person={person2}
          name={"Alex jounky"}
          testimo={
            "Thanks to BrandWorx, our website is not only beautiful but also user-friendly. We’ve seen a noticeable increase in traffic!"
          }
        />
        <PersonCard
          person={person3}
          name={"Chelsia alexy"}
          testimo={
            "The team at BrandWorx nailed our digital marketing strategy. Our online presence has never been stronger, our sales are up!"
          }
        />
        <PersonCard
          person={person4}
          name={"Samsul Afroy"}
          testimo={
            "Working with BrandWorx was a game-changer for our business. Their branding expertise helped us stand out in a crowded market."
          }
        />
        <PersonCard
          person={person5}
          name={"Purwa Adi Twingkiwingki"}
          testimo={
            "BrandWorx delivered an exceptional website design that perfectly reflects our brand. The process was smooth, and the outcome is fantastic!"
          }
        />
        <PersonCard
          person={person6}
          name={"Rizwan Gusnajmi"}
          testimo={
            "We’ve seen incredible growth in our SEO rankings since partnering with BrandWorx. They truly know how to drive results.Thank you so much!"
          }
        />
      </div>
      <img src={banner} alt="banner" className="banner2" />
      <div className="letswork-container">
        <p>Let’s work with Us</p>
        <span>
          Join us to turn your ideas into reality with seamless collaboration
          and expert
        </span>
        <br />
        <span>
          support every step of the way. Let's create something great together!
        </span>
      </div>
      <button type="button" className="connect-btn">
        Connect Now <span className="arr-btn">&#8599;</span>
      </button>
      <About />
    </div>
  );
};
