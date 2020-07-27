import React, { useEffect, useState } from 'react';
import ListPage from '../components/ListPage/ListPage';
import SearchBar from '../components/SearchBar/SearchBar';
import getAllCharacters from '../services/getAllCharacters';

const MainContainer = () => {
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
    fetchNewSearch(searchQuery).then(characters => {
      setCharacters(characters);
    });
    
  };



  return (
    <div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchQuery={searchQuery}/>
      <ListPage characters={characters} />    
    </div>
  );
};

export default MainContainer;

