import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import List from './index';

const makeProps = ({ items, hasLoaded, isLoading } = {}) => ({
  items: items || [],
  hasLoaded: hasLoaded || false,
  isLoading: isLoading || false,
});

const renderComponent = (props) => {
  return shallow(<List {...props} />);
};

describe('List', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = renderComponent(makeProps({ items: [], hasLoaded: true, isLoading: false }));

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
