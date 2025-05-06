import "./PeresonCard.css";
export const PersonCard = ({ person, name, testimo }) => {
  return (
    <div className="person-card">
      <div className="user-info">
        <img src={person} alt="avtar" className="avtar" />
        <div className="pereson-name">
          <h4>{name}</h4>
          <p>Lorem Ipsum</p>
        </div>
        <span class="quote">❝</span>
      </div>
      <p className="person-testimo">{testimo}</p>
    </div>
  );
};
