import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListPage = ({ characters }) => {
  return (
    <div>
      <ul>
        {characters.map(character => (
          <li key={character._id}>
            <img src={character.photoUrl} />
            <Link to={`/${character._id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListPage.propTypes = {

};

export default ListPage;

