import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import reducers from '../reducers';
import Dashboard from './dashboard';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
  }
}

export default App