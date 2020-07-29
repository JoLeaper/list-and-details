import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  fetchNewSearch  from '../services/fetchNewSearch';

export const useSingleCharacter = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    fetchNewSearch(id)
      .then(character => setCharacterInfo(character));
  }, []);

  return characterInfo;
};
