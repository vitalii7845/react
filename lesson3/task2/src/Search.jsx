import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
        <div className="search__field">
          <input type="text" className="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}
