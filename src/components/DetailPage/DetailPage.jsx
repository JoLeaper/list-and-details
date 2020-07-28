import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchNewSearch from '../../services/fetchNewSearch';

const DetailPage = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    fetchNewSearch(id)
      .then(character => setCharacterInfo(character));
  }, []);

  return (
    <div>
      <p>{characterInfo.name}</p>
    </div>
  );
};

DetailPage.propTypes = {

};

export default DetailPage;

