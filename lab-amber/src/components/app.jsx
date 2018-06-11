import React from 'react';
import {Provider} from 'react-redux';
// import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';

import reducers from '../reducers';

// import middlewares from '../middleware/';
// import {logger} from '../middleware/';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import Dashboard from './dashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
  }
}

export default App;