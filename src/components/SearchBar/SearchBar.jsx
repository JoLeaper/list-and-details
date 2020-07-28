import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleChange, handleSubmit, handlePageChange, searchQuery }) => {
  return (
    <>
      <form name='searchForm' onSubmit={handleSubmit}>
        <input name='searchQuery' onChange={handleChange} value={searchQuery}></input>
        <button>Search</button>
      </form>
      <button onClick={handlePageChange} value={-1}>Prev</button><button onClick={handlePageChange} value={1}>Next</button>
    </>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handlePageChange: PropTypes.func,
  searchQuery: PropTypes.string
};

export default SearchBar;

