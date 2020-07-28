import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchNewSearch from '../../services/fetchNewSearch';

const DetailPage = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    fetchNewSearch(id)
      .then(character => setCharacterInfo(character));
  }, []);

  // const { photoUrl, ...characterInfo } = characterInfo;
  const { name, photoUrl, gender, eye, hair, skin, profession, position, affiliation } = characterInfo;
  return (
    <div>
      <img src={photoUrl} />
      <p>Name: {name}</p>
      {gender && <p>Gender: {gender}</p>}
      {eye && <p>Eye Color: {eye}</p> }
      {hair && <p>Hair Color: {hair}</p> }
      {skin && <p>Skin Color: {skin} </p>}
      {profession && <p>Profession: {profession} </p>}
      {position && <p>Position: {position} </p>}
      {affiliation && <p>Affiliation: {affiliation} </p>}
    </div>
  );
};

export default DetailPage;

