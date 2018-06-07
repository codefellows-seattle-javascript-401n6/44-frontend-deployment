import {cards} from './cards.js';
console.log(cards)

export default class Engine {
  constructor() {
    this.resetTwoCards();
    
  }

  resetTwoCards = () => {
    this.card1 = cards[0];
    this.card2 = cards[1];
  }

  getState = () => {
    return {
      card1: this.card1,
      card2: this.card2,
    }
  }

  isMatch = (symbol) => {
    const isInCard1 = this.card1.includes(symbol);
    const isInCard2 = this.card2.includes(symbol);
    const isMatch = isInCard1 && isInCard2;
    if (isMatch) {
      alert('CORRECT')
      this.resetTwoCards();
    }
    return isMatch;
  }
}