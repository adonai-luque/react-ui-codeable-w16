import { store } from "./../store.js";
import CardsByDay from "./CardsByDay.js";

function Main() {
  let datesMap = {};
  let cards = store.cards;
  let dates = cards
    .map((card) => card.date)
    .filter((date) => (datesMap[date] ? false : (datesMap[date] = true)))
    .sort((a, b) => (a > b ? -1 : 1));
  
    function filteredCards(cards, date) {
    return cards.filter((card) => card.date === date);
  }

  return (
    <main className="main">
      {dates.map((date) => {
        return (
          <CardsByDay
            date={date}
            cards={filteredCards(cards, date)}
          />
        );
      })}
    </main>
  );
}

export default Main;
