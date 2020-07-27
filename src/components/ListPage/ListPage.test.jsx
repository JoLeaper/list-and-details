import React from 'react';
import { shallow } from 'enzyme';
import ListPage from './ListPage';

describe('ListPage component', () => {
  let wrapper;
  beforeEach(() => {
    const characters = ['aang', 'sokka', 'katara', 'toph', 'zuko'];
    wrapper = shallow(<ListPage characters={characters} />);
  });
  
  it('has to have 5 p tags', () => {
    expect(wrapper.find('p')).toHaveLength(5);
  });
});
