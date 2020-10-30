import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Header from './index';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({}),
}));

describe('Header', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
