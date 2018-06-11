// create objects

import Symbol from '/.symbol';

class Card {
  constructor(imageUrl, symbols) {
    this.imageUrl = imageUrl;
    this.symbols = symbols;
  }
  // get symbol at location
  getSymbolAt(xx, yy) {
    if (imageUrl === this.card1) {
      return symbols(xx, yy);
    }
  
  }
}

module.exports = Card;