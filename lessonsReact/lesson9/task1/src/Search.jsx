import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    // event.persist(); // ne ochushae
    // console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  };

  searchAlert = event => {
    event.preventDefault();
    // console.log(`Search text: ${this.state.value}`);
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <>
        <form className="search" onSubmit={this.searchAlert}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            className="search__input"
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
