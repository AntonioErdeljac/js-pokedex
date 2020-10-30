import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import FadeIn from './index';

describe('FadeIn', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = shallow(<FadeIn>Content</FadeIn>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
