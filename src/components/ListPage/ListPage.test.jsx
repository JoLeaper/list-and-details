import React from 'react';
import { shallow } from 'enzyme';
import ListPage from './ListPage';

describe('ListPage component', () => {
  let wrapper;
  beforeEach(() => {
    const characters = [{ _id: 1, name: 'aang' }, { _id: 2, name: 'sokka' }, { _id: 3, name: 'katara' }, { _id: 4, name: 'toph' }, { _id: 5, name: 'zuko' }];

    wrapper = shallow(<ListPage characters={characters} />);
  });
  
  it('has to have 5 li tags', () => {
    expect(wrapper.find('li')).toHaveLength(5);
  });
});
