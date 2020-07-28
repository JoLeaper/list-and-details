import { useState, useEffect } from 'react';
import  getAllCharacters  from '../services/getAllCharacters';
import  fetchNewSearch  from '../services/fetchNewSearch';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getAllCharacters()
      .then(initialCharacters => setCharacters(initialCharacters));
  }, []);

  useEffect(() => {
    getAllCharacters(pageNumber)
      .then(pagedCharacters => setCharacters(pagedCharacters));
  }, [pageNumber]);

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'characters':
        setCharacters(target.value);
        break;
      case 'searchQuery':
        setSearchQuery(target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNewSearch(searchQuery)
      .then(characters => {
        setCharacters(characters);
      });
  
  };

  const handlePageChange = ({ target }) => {
    if(pageNumber === 1 && Number(target.value) === -1) return;
    if(characters[0] === undefined && Number(target.value) === 1) return;
    setPageNumber(pageNumber + Number(target.value));
  };
  return {
    characters,
    searchQuery,
    handleChange,
    handleSubmit,
    handlePageChange
  };
};

