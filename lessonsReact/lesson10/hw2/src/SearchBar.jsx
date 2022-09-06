import React from 'react';

const SearchBar = ({ filterText, onFilterTextChange, onInStockChange, inStockOnly }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={event => onFilterTextChange(event.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={event => onInStockChange(event.target.checked)}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
