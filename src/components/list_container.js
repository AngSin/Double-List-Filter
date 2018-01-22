import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ListActions from '../actions/lists';

import List from './list';

class ListContainer extends Component {
  state = {

  };

  render() {
    console.log(this.props);
    return (
      <div id="list-container">
        <List sendTo={ this.props.action.sendToFirst } itemsList={ this.props.lists.listOne }/>
        <List sendTo={ this.props.action.sendToSecond } itemsList={ this.props.lists.listTwo }/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    lists: state.lists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(ListActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
