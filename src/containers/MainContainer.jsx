import React from 'react';
import ListPage from '../components/ListPage/ListPage';
import SearchBar from '../components/SearchBar/SearchBar';
import { useCharacters } from '../hooks/useCharactersHooks.js';
import styles from './MainContainer.css'; 

const MainContainer = () => {
  const { 
    characters, 
    searchQuery, 
    handleChange, 
    handleSubmit,
    handlePageChange } = useCharacters();

  return (
    <div className={styles.MainContainer}>
      <SearchBar handlePageChange={handlePageChange} handleChange={handleChange} handleSubmit={handleSubmit} searchQuery={searchQuery}/>
      <ListPage characters={characters} />    
    </div>
  );
};

export default MainContainer;

