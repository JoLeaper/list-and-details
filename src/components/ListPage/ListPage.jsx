import React from 'react';
import PropTypes from 'prop-types';

const ListPage = ({ characters }) => {
  return (
    <div>
      <ul>
        {characters.map(character => <li key={character.id}>{character.name}</li>)}
      </ul>
    </div>
  );
};

ListPage.propTypes = {

};

export default ListPage;

