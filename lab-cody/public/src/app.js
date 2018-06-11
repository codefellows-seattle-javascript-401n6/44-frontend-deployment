import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SpotIt from './components/spotIt';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <h1>Spot It</h1>
          <Route path="/" component={SpotIt} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);
