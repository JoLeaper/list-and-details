import React from 'react';
import ListPage from '../components/ListPage/ListPage';
import SearchBar from '../components/SearchBar/SearchBar';
import { useCharacters } from '../hooks/useCharactersHooks.js'; 

const MainContainer = () => {
  const { 
    characters, 
    searchQuery, 
    handleChange, 
    handleSubmit } = useCharacters();

  return (
    <div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchQuery={searchQuery}/>
      <ListPage characters={characters} />    
    </div>
  );
};

export default MainContainer;

