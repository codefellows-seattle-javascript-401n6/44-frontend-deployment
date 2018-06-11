import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import SpotItPage from './components/spot-it/spot-it-page';

class App extends Component {
  render() {
    return <BrowserRouter >
      <Fragment>
        <h1>Play Spot It!</h1> 
        <Route exact path='/' component={SpotItPage} />
      </Fragment> 
    </BrowserRouter>;
  }
}


let root = document.getElementById('root');
ReactDOM.render(<App />, root);