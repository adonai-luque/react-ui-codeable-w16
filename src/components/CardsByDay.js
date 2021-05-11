import Card from "./Card";
import { year, month, day } from "../date";

const CardsByDay = ({ date, cards }) => {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "setiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  return (
    <section className="section">
      <h2 className="section__title">
        {`${day(date)} de ${months[month(date)]} de ${year(date)}`}
      </h2>
      <div className="section__card-list">
        {cards.map((card) => {
          const { title, body, image, big } = card
          return (
            <Card
              title={title}
              body={body}
              img={image}
              big={big}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardsByDay;
