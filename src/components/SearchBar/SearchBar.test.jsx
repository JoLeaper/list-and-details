import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  let wrapper;
  let handleChange;
  let handleSubmit;

  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    wrapper = shallow(<SearchBar
      searchQuery='aang' 
      handleChange={handleChange}
      handleSubmit={handleSubmit} />);
  });

  it('needs to have an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('needs to have a working onChange function', () => {
    wrapper.find('input[name="searchQuery"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes the onSubmit prop when we click submit', () => {
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
