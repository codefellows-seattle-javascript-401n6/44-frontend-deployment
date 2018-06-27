import React from 'react';
import {connect} from 'react-redux';
import ListItem from './list-item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  displayNewSet = () => {
    return this.props.info.map((listItem, i) => {
      return (
        <ListItem key={i} info={listItem} />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>List:</h1>
        <ul>
          {this.displayNewSet()}
        </ul>
      </React.Fragment>
    )
  }

};

export default List;