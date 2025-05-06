import "./PortfolioCard.css";
export const PortfolioCard = ({ img, text, heading }) => {
  return (
    <div className="portfolio-card">
      <div className="card">
        <div className="left-card">
          <span className="text">{text}</span>
          <h1 className="heading-text">{heading}</h1>
          <p className="lorem-text">
            Lorem ipsum dolor sit amet consectetur. Pulvinar nunc euismod metus
            scelerisque
          </p>
        </div>

        <img src={img} alt={text} className="card-img" />
      </div>
      <div className="card-details">Hello</div>
    </div>
  );
};
