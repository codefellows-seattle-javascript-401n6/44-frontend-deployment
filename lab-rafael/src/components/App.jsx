import React, { Component } from 'react';
import Cards from './Cards'
import Test from './TestComponent'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Cards />
      </div>
    )
  }
}
