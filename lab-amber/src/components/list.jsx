import React from 'react';
import {connect} from 'react-redux';

import ListItem from './list-item.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.displayNewSet = this.displayNewSet.bind(this);
  }

  displayNewSet() {
    console.log('list this.props', this.props.info);
    return this.props.info.map((listItem, i) => {
      console.log('list. listItem', i, listItem);
      return <ListItem key={i} info={listItem} />
    });
  }

  render() {
    return <React.Fragment>
        <h2>List</h2>
        <ul>
          {this.displayNewSet()}
        </ul>
      </React.Fragment>
  }
}

module.exports = List;