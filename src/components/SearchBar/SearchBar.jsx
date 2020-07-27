import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleChange, handleSubmit, searchQuery }) => {
  return (
    <>
      <form name='searchForm' onSubmit={handleSubmit}>
        <input name='searchQuery' onChange={handleChange} value={searchQuery}></input>
        <button>Search</button>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  searchQuery: PropTypes.string
};

export default SearchBar;

