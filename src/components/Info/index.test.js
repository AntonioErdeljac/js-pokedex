import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Info from './index';

describe('Info', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = shallow(<Info />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
