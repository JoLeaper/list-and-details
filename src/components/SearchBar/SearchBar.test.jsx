import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  let wrapper;
  const handleChange = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<SearchBar onChange={handleChange} />);
  });
});
