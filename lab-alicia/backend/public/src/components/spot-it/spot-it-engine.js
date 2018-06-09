import card1Image from './01.png';
import card2Image from './55.png';

export default class SpotItEngine {
  constructor() {
    this.isGameOver = false;
    this.resetTwoCards();
  }

  resetTwoCards = () => {
      this.card1 = ["igloo", "dragon", "art", "lightning", "knight", "man", "dog", "padlock"],
      this.card2 = ["padlock", "lips", "anchor", "music-note", "flower", "exclamation-point", "car", "key"]
      this.card1.sort(() => Math.random() < .5 ? -1 : 1);
      this.card2.sort(() => Math.random() < .5 ? -1 : 1);
      this.card1Image = this.card1Image;
      this.card2Image = this.card2Image;
      this.guessesLeft = 3;
    }
  
  getState = () => {
    return {
      card1: this.card1,
      card2: this.card2,
      guessesLeft: this.guessesLeft,
      isGameOver: this.isGameOver,
      card1Image: this.card1Image,
      card2Image: this.card2Image,
    }
  }

  isMatch = (symbol) => {
    if (this.isGameOver) {
      return;
    }

    this.guessesLeft--;
    if (this.guessesLeft === 0) {
      this.isGameOver = true;
    }

    let isInCard1 = this.card1.includes(symbol);
    let isInCard2 = this.card2.includes(symbol);
    const isMatch = isInCard1 && isInCard2;
    if (isMatch) {
      this.resetTwoCards();
      let cards = [this.card1, this.card2];
      this.card1 = cards[1];
      this.card2 = cards[0];
      this.guessesLeft = 3;
    }
    return isMatch;
  }
}