import React, { Component } from 'react';

export default class List extends Component {
  state = { itemsList: [], searchTerm: '' };

  componentDidMount() {
    let { itemsList } = this.props;
    this.setState({ itemsList })
  }

  render() {
    //filter out the list items while ignoring case.
    let itemsList = this.state.itemsList.slice(0).filter(item => item.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    const renderItems = itemsList.map((item,index) => {
      return (
        <li
          className="list-group-item"
          key={ index }
          onClick={ () => this.props.sendTo(item, index) }
        >
          { item }
        </li>
      );
    });
    return (
      <div className="list">
        <input
          className="list-group-item"
          type="text"
          placeholder="Search"
          onChange={ e => this.setState({ searchTerm: e.target.value })}
        />
        <ul className="list-group">
          { renderItems }
        </ul>
      </div>
    );
  }
}
