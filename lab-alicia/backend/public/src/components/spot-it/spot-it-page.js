import React, {Component, Fragment} from 'react';
import SpotIt from './spot-it';

export default class SpotItPage extends Component {
  render() {
    return <Fragment>
      <p>Spot the symbol that appears on both cards.</p>
      <p>Found it?</p>
      <p>Click on it and two new cards will appear.</p>
      <p>Now you know how to play! Have fun!</p>
      <SpotIt />
    </Fragment>;
  }
}