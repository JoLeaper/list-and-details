import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
    </div>
  );
}

Header.propTypes = {

};

export default Header;

