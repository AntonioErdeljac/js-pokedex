import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import List from './index';

const EXPECTED_ITEMS_LENGTH = 2;

const makeProps = ({ items, hasLoaded, isLoading, onSearch } = {}) => ({
  items: items || [{ name: 'Lorem' }, { name: 'Ipsum' }],
  hasLoaded: hasLoaded || false,
  isLoading: isLoading || false,
  onSearch: onSearch || null,
});

const renderComponent = (props) => {
  return shallow(<List {...props} />);
};

describe('List', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderComponent(makeProps());
  });

  it('renders correctly according to snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correct number of items', () => {
    expect(wrapper.find('Memo(Item)').length).toEqual(EXPECTED_ITEMS_LENGTH);
  });

  it('renders search filter conditionally', () => {
    expect(wrapper.find('FormControl').length).toEqual(0);

    const wrapperWithSearch = renderComponent(makeProps({ onSearch: () => {} }));
    expect(wrapperWithSearch.find('FormControl').length).toEqual(1);
  });
});
