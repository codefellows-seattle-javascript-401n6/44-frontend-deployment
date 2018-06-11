import React, { Component, Fragment } from 'react'
import shuffle from '../utils/shuffle'
import { cards } from '../utils/mapCards'


export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: cards,
      currentPair: shuffle(cards).slice(0, 2),
      triesLeft: 3,
      gameOver: false
    }
  }

  generateCards = () => {
    this.setState({ currentPair: shuffle(this.state.cards).slice(0, 2)})
  }

  checkMatch = (e) => {
    let group = e.target.getAttribute('group');
    let value = e.target.value;

    while(this.state.triesLeft >= 0) {
      if (this.state.triesLeft === 0) {
        this.setState({ gameOver: true })
        return false;
      }

      if (group === '0' && this.state.currentPair[1].includes(value)) {
        this.generateCards();
        return true;
      }

      if (group === '1' && this.state.currentPair[0].includes(value)) {
        this.generateCards();
        return true;
      }

      this.setState({ triesLeft: this.state.triesLeft - 1 })
      return false;
    }
  }

  restartGame = () => {
    this.setState({
      triesLeft: 3,
      gameOver: false
    })
  }

  render() {
    return (
      <div id="cards">
        <div id="score">Tries left: {this.state.triesLeft}</div>
        {this.state.gameOver &&
          <div>
            <span id="message">Sorry, you are out of tries. retry?</span>
            <button onClick={this.restartGame}>restart</button>
          </div>
        }
        <div className="card">
          {this.state.currentPair.map((card, group) => {
            return <div key={group}>
              {card.map((image, index) => {
                return <span key={index}>
                  <button group={group} onClick={this.checkMatch} value={image}>{image}</button>
                </span>
              })}
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
