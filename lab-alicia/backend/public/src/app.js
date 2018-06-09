import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import SpotItPage from './components/spot-it/spot-it-page';

class App extends Component {
  render() {
    return <Fragment>
      <h1>My Spot It App</h1>
      <SpotItPage />
    </Fragment>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);