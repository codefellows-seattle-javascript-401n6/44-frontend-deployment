import React from 'react';
import {connect} from 'react-redux';
import List from './list';
import {listsLoad} from '../actions/spot-it-actions';

class Dashboard extends React.Component {
  
  componentDidMount() {
    this.props.listsLoad();
  };

  render() {
    return (
      <React.Fragment>
        <h1>Find the words that are in both sets</h1>
        <div>Score: {this.props.lists.score}</div>
        <List info={this.props.lists.list1} />
        <List info={this.props.lists.list2} />
      </React.Fragment>
    );
  };
};

  const mapStateToProps = (state) => {
    return {
      lists: state.lists,
    };
  };

  const mapDispatchToProps = (dispatch, getState) => {
    return {
      listsLoad: () => {
        dispatch(listsLoad());
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);