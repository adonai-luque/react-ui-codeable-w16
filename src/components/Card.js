import "../stylesheets/Card.css";

const Card = ({ title, body, img, big }) => {
  return (
    <div className={big ? "card big" : "card"}>
      <img src={img} alt={title} />
      <div className="overlay"></div>
      <div className="description">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
