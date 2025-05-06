import "./WorkWithUs.css";
import frame1 from "../../Assests/box/Frame 1.png";
import frame2 from "../../Assests/box/Frame 2.png";
import frame3 from "../../Assests/box/Frame 3.png";
export const WorkWithUs = () => {
  return (
    <div className="work-container" id="services">
      <img src={frame1} alt="frame1" />
      <img src={frame2} alt="frame2" />
      <img src={frame3} alt="frame3" />
    </div>
  );
};
