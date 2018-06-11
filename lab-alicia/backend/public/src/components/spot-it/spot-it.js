import React, {Component, Fragment} from 'react';
import SpotItEngine from './spot-it-engine';

export default class SpotIt extends Component {
  constructor(props) {
    super(props);
    this.engine = new SpotItEngine();
    this.state = this.engine.getState();
  }

  handleClick = (symbol) => {
    this.engine.isMatch(symbol);
    this.setState(this.engine.getState());
  }

  handleImageClick = (ev) => {
    let percentX = ev.nativeEvent.offsetX / ev.target.width;
    let percentY = ev.nativeEvent.offsetY / ev.target.height;
    console.log('x%', percentX, 'y%', percentY);
  }

  render = () => {
    return <Fragment>
      <div>
        Guesses Left: {this.state.guessesLeft}
      </div>
      <div>
        <img onClick={this.handleImageClick} src={this.state.card1Image} />
        <img onClick={this.handleImageClick} src={this.state.card2Image} />
      </div>
      <div>
        {this.state.card1.map((symbol, i) => {
          return <button key={i} onClick={() => this.handleClick(symbol)}>{symbol} </button>;
        })}
      </div>
      <div>
        {this.state.card2.map((symbol, i) =>{
          return <button key={i} onClick={() => this.handleClick(symbol)}>{symbol} </button>;
        })}
      </div>
    </Fragment>;
  }
}