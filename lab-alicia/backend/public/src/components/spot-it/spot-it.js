import React, {Component, Fragment} from 'react';
import SpotItEngine from './spot-it-engine';

export default class SpotIt extends Component {
  constructor(props) {
    super(props);
    this.engine = new SpotItEngine();
    this.state = this.engine.getState();
  }

  handleClick = (symbol) => {
    this.engine.isMatch(symnol);
    this.setState(this.engine.getState());
  }

  // handleImageClick = (ev) => {
  
  // }

  render() {
    return <Fragment>
      <div>
        Guesses Left: {this.state.guessesLeft}
      </div>
      <div>
        {this.state.card1.map(symbol => {
          return <span onClick={() => handleClick(symbol)}>{symbol} </span>;
        })}
      </div>
      <div>
        {this.state.card2.map((symbol) =>{
          return <span onClick={() => handleClick(symbol)}>{symbol} </span>;
        })}
      </div>
    </Fragment>;
  }
}