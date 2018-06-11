import React, { Component, Fragment } from 'react';
import Engine from './engine';

export default class SpotItPage extends Component {
  constructor(props) {
    super(props);
    this.Engine = new Engine();
    this.state = this.Engine.getState();
  }

  handleClick = (symbol) => {
    this.Engine.isMatch(symbol);
    this.setState(this.Engine.getState());
  }



  render = () => {
    return <Fragment>

      <div>
        {this.state.card1.map((symbol, i) => {
          return <button key={i} onClick={() => this.handleClick(symbol)}>{symbol}</button>
        })}
      </div>
      <div>
        {this.state.card2.map((symbol, i) => {
          return <button key={i} onClick={() => this.handleClick(symbol)}>{symbol}</button>
        })}
      </div>
    </Fragment>
  }
}