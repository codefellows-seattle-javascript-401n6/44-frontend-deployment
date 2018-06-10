import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SpotItPage from './components/spot-it';


class App extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <h1>My Spot It App</h1>
        <Route path="/" component={SpotItPage} />
      </Fragment>
    </BrowserRouter>
  }
}
let root = document.getElementById('root');
ReactDOM.render(<App />, root);