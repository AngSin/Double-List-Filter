import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ListActions from '../actions/lists';

import List from './List';

const ListWrapper = ({
  action: { sendToFirst, sendToSecond },
  lists: { listOne, listTwo }
}) => (
  <div id="list-container">
    <List sendTo={sendToFirst} itemsList={listOne} />
    <List sendTo={sendToSecond} itemsList={listTwo} />
  </div>
);

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(ListActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);
