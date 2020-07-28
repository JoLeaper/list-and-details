import { useState, useEffect } from 'react';
import  getAllCharacters  from '../services/getAllCharacters';
import  fetchNewSearch  from '../services/fetchNewSearch';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllCharacters()
      .then(initialCharacters => setCharacters(initialCharacters));
  }, []);

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

  return {
    characters,
    searchQuery,
    handleChange,
    handleSubmit
  };
};

