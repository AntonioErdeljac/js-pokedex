import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Footer from './index';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({}),
}));

describe('Footer', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = shallow(<Footer />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
