import { store } from './../store.js'
import Section from './Section.js'

export default function Main() {
  let dates = [...new Set(store.cards.map((card) => (card.date)).sort().reverse())];
  function filteredCards(cards, date) {
    return cards.filter((card) => (card.date === date));
  }
  
  return (
    <main className="main">
      {dates.map((date) => {
        return (
          <Section date={date} filteredCards={ filteredCards(store.cards, date) } />
        );
      })}
    </main>    
  );
};